import './Hero.css'

function Hero() {
  return (
    <div className="hero-wrapper">
      <nav className="nav">
        <span className="nav-log">
          CC
        </span>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <hr className="nav-divider" />

      <section className="hero">
        <div className="hero">
          <div className="hero-text">
            <span className="hero-tag">Camilla Cardoso</span>
            <h1 className="hero-headline">
              I used to build the strategy.
              <em>Now I build the product too.</em>
            </h1>
            <p className="hero-sub">
              Front-end developer & marketing strategist · Düsseldorf
            </p>
            <a href="#work" className="hero-btn">See my work</a>
          </div>

          <div className="hero-photo">
            <img src="https://placehold.co/320x420" alt="Camilla Cardoso>"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero