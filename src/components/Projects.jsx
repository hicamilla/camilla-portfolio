import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Parked Here',
    description: 'Save where you parked and get a walking route back to your vehicle.',
    tags: ['JavaScript', 'Maps API'],
    link: 'https://parkedhere.netlify.app',
    variant: 'dark'
  },
  {
    number: '02',
    title: 'Your Translator',
    description: 'Real-time voice and text translator powered by the Web Speech API.',
    tags: ['JavaScript', 'Speech API'],
    link: 'https://yourtranslator.netlify.app',
    variant: 'dark'
  },
  {
    number: '03',
    title: 'Guruverse',
    description: 'A conversational AI chatbot. Ask it anything.',
    tags: ['JavaScript', 'OpenAI API'],
    link: 'https://guruverse.netlify.app',
    variant: 'accent'
  }
]

function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-inner">
        <div className="projects-header">
          <span className="projects-label">Work</span>
          <h2 className="projects-heading">Selected projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.number} className={`project-card project-card--${project.variant}`}>
              <span className="project-number">{project.number}</span>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                   View project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

