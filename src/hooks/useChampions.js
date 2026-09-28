import { useState, useEffect, useCallback, useRef } from 'react';
import {
  getInitialChampions,
  fetchLiveWikipediaChampions,
  calculateDaysHeld
} from '../services/wikipediaService';

export function useChampions(promotion) {
  const [champions, setChampions] = useState(() => {
    const initial = getInitialChampions(promotion);
    return initial.data;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [source, setSource] = useState(() => {
    const initial = getInitialChampions(promotion);
    return initial.source;
  });
  const [lastUpdated, setLastUpdated] = useState(() => {
    const initial = getInitialChampions(promotion);
    return initial.timestamp;
  });
  const [hasNewTitleChange, setHasNewTitleChange] = useState(false);

  const prevRevIdRef = useRef(null);

  const syncWithWikipedia = useCallback(
    async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchLiveWikipediaChampions(promotion);

        if (prevRevIdRef.current && result.revid && prevRevIdRef.current !== result.revid) {
          setHasNewTitleChange(true);
        }
        if (result.revid) {
          prevRevIdRef.current = result.revid;
        }

        setChampions(result.data);
        setSource(result.source);
        setLastUpdated(result.timestamp);
      } catch (err) {
        console.warn(`[useChampions] Sync error for ${promotion}:`, err);
        setError(err.message);
        setChampions((prev) =>
          prev.map((item) => ({
            ...item,
            daysHeld: calculateDaysHeld(item.dateWon, item.daysHeld)
          }))
        );
      } finally {
        setLoading(false);
      }
    },
    [promotion]
  );

  useEffect(() => {
    setHasNewTitleChange(false);
    syncWithWikipedia();

    const intervalId = setInterval(() => {
      syncWithWikipedia();
    }, 60000);

    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        syncWithWikipedia();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityOrFocus);
    window.addEventListener('focus', handleVisibilityOrFocus);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
      window.removeEventListener('focus', handleVisibilityOrFocus);
    };
  }, [promotion, syncWithWikipedia]);

  const refresh = useCallback(() => {
    setHasNewTitleChange(false);
    return syncWithWikipedia();
  }, [syncWithWikipedia]);

  return {
    champions,
    loading,
    error,
    source,
    lastUpdated,
    hasNewTitleChange,
    refresh
  };
}
