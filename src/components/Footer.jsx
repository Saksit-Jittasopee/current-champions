import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ title }) => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-title">{title}</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/saksit.jittasopee.1"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/saksitjittasopee/"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://github.com/Saksit-Jittasopee"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/saksit-jittasopee-743981382/"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;