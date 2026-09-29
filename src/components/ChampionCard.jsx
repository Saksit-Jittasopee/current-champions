import { useState } from 'react';
import defaultBelt from '../assets/default-belt.svg';

const ChampionCard = ({ champ }) => {
  const [imgSrc, setImgSrc] = useState(champ.imageUrl || defaultBelt);
  const [imgFailed, setImgFailed] = useState(!champ.imageUrl);

  const handleImageError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      setImgSrc(defaultBelt);
    }
  };

  return (
    <div className={champ.cardClass || 'card-smackdown'}>
      <div className="card-body">
        <img
          src={imgSrc}
          className="card-img-top"
          alt={champ.title}
          onError={handleImageError}
          loading="lazy"
        />

        <h3 className="card-title">
          {champ.champLinks && champ.champLinks.length > 0 ? (
            champ.champLinks.map((link, idx) => (
              <span key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${link.name} on Wikipedia`}
                >
                  {link.name}
                </a>
                {idx < champ.champLinks.length - 1 ? ' & ' : ''}
              </span>
            ))
          ) : (
            <span>{champ.champName}</span>
          )}
        </h3>

        <p className="card-text">{champ.notes}</p>
      </div>

      <div className="card-footer">
        <small className="text-muted">{champ.title}</small>
        <small className="text-muted">Date Won: {champ.dateWon}</small>
        <small className="text-muted">Days Held: {champ.daysHeld}</small>
        <small className="text-muted">Reign: {champ.reign}</small>
      </div>
    </div>
  );
};

export default ChampionCard;
