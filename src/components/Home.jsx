import "./Home.css";

const techStack = [
  { icon: "⚡", name: "Vite", sub: "React Router" },
  { icon: "🟨", name: "JavaScript", sub: "JSX" },
  { icon: "💠", name: "Bootstrap", sub: "CSS v5" },
  { icon: "🃏", name: "Cards", sub: "Bootstrap v5.0", href: "https://getbootstrap.com/docs/5.0/components/card/" },
  { icon: "🔣", name: "React Icons", sub: "Icon Library" },
];

const Home = ({ title }) => {
  return (
    <div className="home">

      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-eyebrow">🏆 Championship Tracker</div>

          <h1 className="home-title">
            {title ?? <>WRESTLING<br /><span>CHAMPIONS</span></>}
          </h1>

          <p className="hero-subtitle">WWE · NXT · AEW · And More</p>

          <div className="hero-badge-row">
            <span className="hero-badge">Updated Monthly</span>
            <span className="hero-badge">React + Vite</span>
            <span className="hero-badge">Live Titles</span>
          </div>
        </div>
      </section>

      <div className="home-divider">
        <span className="divider-icon">✦</span>
      </div>

      <section className="home-section">
        <p className="section-label">About This Page</p>
        <h2 className="section-title">What Is This?</h2>

        <div className="about-card">
          <p className="section-body">
            This page was built to track <strong style={{ color: "#FFD700" }}>current Wrestling Champions</strong> across
            the biggest promotions — WWE, NXT, AEW, and more. Powered by React, JavaScript, and Vite.
            Titles are reviewed and updated every month to stay accurate.
          </p>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            Click the buttons to browse champions by promotion, and use the theme icon to switch between dark and light mode.
          </p>
        </div>
      </section>

      <div className="home-divider">
        <span className="divider-icon">✦</span>
      </div>

      <section className="home-section">
        <p className="section-label">Built With</p>
        <h2 className="section-title">Tech Stack</h2>

        <div className="tech-grid">
          {techStack.map((t) => (
            <div className="tech-item" key={t.name}>
              {t.href ? (
                <a href={t.href} target="_blank" rel="noopener noreferrer">
                  <div className="tech-icon">{t.icon}</div>
                  <div className="tech-name">{t.name}</div>
                  <div className="tech-sub">{t.sub}</div>
                </a>
              ) : (
                <>
                  <div className="tech-icon">{t.icon}</div>
                  <div className="tech-name">{t.name}</div>
                  <div className="tech-sub">{t.sub}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p className="footer-msg">
          Click the buttons to see any promotion's current champions.
          Use the icon to toggle the theme.
        </p>
        <p className="footer-thanks">Thank You For Visiting 🏆</p>
      </footer>

    </div>
  );
};

export default Home;