import { IoReloadOutline, IoCloudDoneOutline, IoWarningOutline, IoFlashOutline } from 'react-icons/io5';
import './LiveStatusBar.css';

const LiveStatusBar = ({ source, lastUpdated, loading, onRefresh, error, hasNewTitleChange }) => {
  const getBadge = () => {
    if (hasNewTitleChange) {
      return (
        <span className="live-badge title-change" title="A title recently changed hands and was updated!">
          <IoFlashOutline size={14} /> Title Change Updated
        </span>
      );
    }
    if (source === 'wikipedia') {
      return (
        <span className="live-badge live">
          <span className="status-dot"></span>
          <IoCloudDoneOutline size={14} /> Live Wikipedia
        </span>
      );
    }
    if (source === 'cache' || source === 'cache_expired') {
      return (
        <span className="live-badge cached">
          <span className="status-dot"></span>
          <IoCloudDoneOutline size={14} /> Auto-Sync Active
        </span>
      );
    }
    return (
      <span className="live-badge fallback">
        <IoWarningOutline size={14} /> Offline Mode
      </span>
    );
  };

  const formatTime = (ts) => {
    if (!ts) return '';
    try {
      const d = new Date(ts);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  return (
    <div className="live-status-bar">
      <div className="live-status-info">
        {getBadge()}
        <span className="live-timestamp">
          {loading
            ? 'Checking Wikipedia for title changes...'
            : error
            ? `Sync notice: ${error} (using current champions)`
            : lastUpdated
            ? `Auto-synced: ${formatTime(lastUpdated)}`
            : 'Auto-updates on title changes'}
        </span>
      </div>

      <button
        className="live-refresh-btn"
        onClick={onRefresh}
        disabled={loading}
        title="Check Wikipedia immediately for title changes"
      >
        <IoReloadOutline className={loading ? 'spin-icon' : ''} size={15} />
        {loading ? 'Checking...' : 'Check Live'}
      </button>
    </div>
  );
};

export default LiveStatusBar;
