import { useChampions } from '../hooks/useChampions';
import ChampionCard from './ChampionCard';
import LiveStatusBar from './LiveStatusBar';
import './WWEInfo.css';

const WWEInfo = ({ title }) => {
  const { champions, loading, error, source, lastUpdated, hasNewTitleChange, refresh } =
    useChampions('wwe');

  return (
    <main>
      <h3>{title}</h3>
      <LiveStatusBar
        source={source}
        lastUpdated={lastUpdated}
        loading={loading}
        onRefresh={refresh}
        error={error}
        hasNewTitleChange={hasNewTitleChange}
      />

      {loading && champions.length === 0 ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Fetching latest champions from Wikipedia...</p>
        </div>
      ) : (
        <div className="card-group">
          {champions.map((champ) => (
            <ChampionCard key={champ.id || champ.title} champ={champ} />
          ))}
        </div>
      )}
    </main>
  );
};

export default WWEInfo;
