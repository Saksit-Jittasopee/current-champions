import { Link, useLocation } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { FaMoon, FaHome } from "react-icons/fa";
import { SiWwe } from "react-icons/si";
import AEW from "../assets/AEW/AEW.ico";
import NXT from "../assets/NXT/NXT.ico";
import TNA from "../assets/TNA/TNA.ico";
import NJPW from "../assets/NJPW/NJPW.ico";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className={`nav-btn home-nav-btn ${currentPath === "/" ? "active" : ""}`}
          title="Home"
        >
          <FaHome size={22} />
        </Link>

        <nav className="promo-nav" aria-label="Wrestling Promotions">
          <Link
            to="/wwe"
            className={`promo-link wwe-link ${currentPath === "/wwe" ? "active" : ""}`}
            title="WWE Champions"
          >
            <SiWwe size={26} />
            <span className="promo-label">WWE</span>
          </Link>

          <Link
            to="/nxt"
            className={`promo-link nxt-link ${currentPath === "/nxt" ? "active" : ""}`}
            title="NXT Champions"
          >
            <img src={NXT} alt="NXT" className="promo-icon" />
            <span className="promo-label">NXT</span>
          </Link>

          <Link
            to="/aew"
            className={`promo-link aew-link ${currentPath === "/aew" ? "active" : ""}`}
            title="AEW Champions"
          >
            <img src={AEW} alt="AEW" className="promo-icon" />
            <span className="promo-label">AEW</span>
          </Link>

          <Link
            to="/tna"
            className={`promo-link tna-link ${currentPath === "/tna" ? "active" : ""}`}
            title="TNA Champions"
          >
            <img src={TNA} alt="TNA" className="promo-icon" />
            <span className="promo-label">TNA</span>
          </Link>

          <Link
            to="/njpw"
            className={`promo-link njpw-link ${currentPath === "/njpw" ? "active" : ""}`}
            title="NJPW Champions"
          >
            <img src={NJPW} alt="NJPW" className="promo-icon" />
            <span className="promo-label">NJPW</span>
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <IoSunny className="theme-icon sun" size={20} />
          ) : (
            <FaMoon className="theme-icon moon" size={18} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
