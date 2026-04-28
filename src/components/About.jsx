import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <span className="about-label">About</span>
        <div className="about-content">
          <h2 className="about-heading">
            The person behind the work
          </h2>
          <div className="about-text">
            <p>I spent 10 years building strategies for brands. Then I moved to Düsseldorf, started over, and decided to finally learn how to build the thing itself.</p>
            <p>That marketing background gives me something I use every day — the ability to think about a product from the outside in. Who it's for, what it should feel like, where it breaks down. Strategy and code, in the same brain.</p>
            <p>Structured to a fault and obsessed with details. If something's slightly off, I will notice — and I will fix it. Blame Monica Geller.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About