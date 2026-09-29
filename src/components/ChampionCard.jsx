import { useState } from "react";
import defaultBelt from "../assets/default-belt.svg";
import {
  FaCalendarAlt,
  FaClock,
  FaTrophy,
  FaMapMarkerAlt,
} from "react-icons/fa";

const BADGE_MAP = {
  "card-raw": "RAW",
  "card-smackdown": "SMACKDOWN",
  "card-open": "OPEN / TAG",
  "card-nxtmen": "NXT",
  "card-nxtwomen": "NXT WOMEN",
  "card-aewmen": "AEW",
  "card-aewwomen": "AEW WOMEN",
  "card-tnamen": "TNA",
  "card-tnawomen": "KNOCKOUTS",
  "card-njpwmen": "NJPW",
  "card-njpwjrmen": "NJPW JR.",
  "card-njpwstrong": "NJPW STRONG",
  "card-njpwwomen": "NJPW WOMEN",
};

const ChampionCard = ({ champ }) => {
  const [imgSrc, setImgSrc] = useState(champ.imageUrl || defaultBelt);
  const [imgFailed, setImgFailed] = useState(!champ.imageUrl);

  const handleImageError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      setImgSrc(defaultBelt);
    }
  };

  const badgeText = BADGE_MAP[champ.cardClass] || "CHAMPION";

  // Render Champion Holder with links if available
  const renderChampionHolder = () => {
    if (champ.champLinks && champ.champLinks.length > 0) {
      // Check if title is a team with parentheses e.g. "The Vision ( Bron Breakker and Austin Theory )"
      const parenMatch = champ.champName.match(/^([^(]+)\(([^)]+)\)$/);
      if (parenMatch) {
        const teamName = parenMatch[1].trim();
        const membersText = parenMatch[2].trim();
        return (
          <div className="champion-holder-group">
            <span className="team-name">{teamName}</span>
            <span className="team-members">
              (
              {champ.champLinks
                .filter((l) => l.name !== teamName)
                .map((link, idx, arr) => (
                  <span key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="champion-link"
                    >
                      {link.name}
                    </a>
                    {idx < arr.length - 1 ? " & " : ""}
                  </span>
                ))}
              {champ.champLinks.filter((l) => l.name !== teamName).length === 0
                ? membersText
                : ""}
              )
            </span>
          </div>
        );
      }

      return (
        <div className="champion-holder-group">
          {champ.champLinks.map((link, idx) => (
            <span key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="champion-link"
              >
                {link.name}
              </a>
              {idx < champ.champLinks.length - 1 ? " & " : ""}
            </span>
          ))}
        </div>
      );
    }

    return (
      <span className="champion-name-text">{champ.champName || "Vacant"}</span>
    );
  };

  return (
    <article className={`champion-card ${champ.cardClass || "card-smackdown"}`}>
      <div className="card-image-box">
        <span className="card-badge">{badgeText}</span>
        <img
          src={imgSrc}
          className="card-img-top"
          alt={champ.title}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="title-area">
          <h4 className="championship-title">{champ.title}</h4>
          <h3 className="card-title">{renderChampionHolder()}</h3>
        </div>

        {champ.notes && (
          <p className="card-text" title={champ.notes}>
            {champ.notes}
          </p>
        )}
      </div>

      <footer className="card-footer">
        <div className="stats-grid">
          <div className="stat-chip">
            <span className="stat-icon">
              <FaCalendarAlt size={11} />
            </span>
            <div className="stat-details">
              <span className="stat-label">WON</span>
              <span className="stat-value">{champ.dateWon || "N/A"}</span>
            </div>
          </div>

          <div className="stat-chip days-held-chip">
            <span className="stat-icon">
              <FaClock size={11} />
            </span>
            <div className="stat-details">
              <span className="stat-label">DAYS</span>
              <span className="stat-value">{champ.daysHeld || "0+ Days"}</span>
            </div>
          </div>

          <div className="stat-chip">
            <span className="stat-icon">
              <FaTrophy size={11} />
            </span>
            <div className="stat-details">
              <span className="stat-label">REIGN</span>
              <span className="stat-value">{champ.reign || "1"}</span>
            </div>
          </div>

          {champ.location && (
            <div className="stat-chip">
              <span className="stat-icon">
                <FaMapMarkerAlt size={11} />
              </span>
              <div className="stat-details">
                <span className="stat-label">VENUE</span>
                <span className="stat-value">{champ.location}</span>
              </div>
            </div>
          )}
        </div>
      </footer>
    </article>
  );
};

export default ChampionCard;
