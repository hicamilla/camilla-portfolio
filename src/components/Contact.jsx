import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <span className="contact-label">Contact</span>
        <div className="contact-content">
          <h2 className="contact-heading">Let's work together</h2>
            <p className="contact-sub">
            I'm currently open to new opportunities — front-end roles, freelance projects, or just a good conversation about products and strategy.
          </p>
          <a href="mailto:hicamillacardoso@gmail.com" className="contact-btn">
            Say hello →
          </a>
          <div className="contact-links">
            <a href="https://github.com/hicamilla" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hicamilla" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact