import './Skills.css'

const buildSkills = [
  'HTML5', 'CSS', 'JavaScript', 'React', 'Python', 'Git & GitHub', 'Bootstrap', 'REST APIs', 'Vite'
]

const marketingSkills = [
  'GA4', 'HubSpot', 'Looker Studio', 'GTG', 'Amplitude', 'Semrush'
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <span className="skills-label">
          Skills
        </span>
        <div className="skills-content">
          <h2 className="skills-heading">
            What I work with
          </h2>

          <div className="skills-group">
            <span className="skills-group-label">
              Build
            </span>
            <div className="skills-tags">
              {buildSkills.map((skill) => ( 
                <span key={skill} className="tag tag-build">
                  {skill}
                </span>
              ))}
            </div>
          </div>

            <div className="skills-group">
              <span className="skills-group-label">
                Measure & Activate
              </span>
              <div className="skills-tags">
                {marketingSkills.map((skill) => (
                  <span key={skill} className="tag tag-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Skills