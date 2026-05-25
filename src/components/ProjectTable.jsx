import githubLogo from '../../images/GitHub_Invertocat_White.png';

const projects = [
  {
    year: 2026,
    name: 'Probing the Grammar Machine',
    description:
      'A layer-wise mechanistic analysis of grammatical encoding in BERT.',
    technologies: [
      'Python',
      'sci-kit learn',
      'pandas',
      'matplotlib',
      'scipy',
      'torch',
    ],
    link: 'https://github.com/llasic7558/590NN_Proj',
  },
  {
    year: 2026,
    name: 'U-Commerce',
    description:
      'E-Commerce website designed for and used by five-college students to sell student-made products and services.',
    technologies: [
      'NodeJS',
      'ReactJS',
      'ExpressJS',
      'PostgreSQL',
      'Supabase',
      'Auth0',
      'Jest',
    ],
    link: 'https://github.com/BakingPancakes/U-Commerce',
  },
  {
    year: 2026,
    name: 'My Honors Thesis',
    description:
      'Assessing the Predictive Accuracy of Machine Learning Models in NBA Draft Player Evaluation',
    technologies: [
      'Python',
      'sci-kit learn',
      'pandas',
      'matplotlib',
      'torch',
    ],
    link: 'https://github.com/ohosman04/CHC-ML-NBA-Draft-Predictor',
  },
  {
    year: 2025,
    name: 'Edibly',
    description:
      'A web application delivering personalized meal recommendations based on dietary needs for the Five-College residents.',
    technologies: [
      'NodeJS',
      'ReactJS',
      'ExpressJS',
      'PostgreSQL',
      'Supabase',
      'Auth0',
      'Render',
    ],
    link: 'https://github.com/Justincheng2005/Edibly',
  },
  {
    year: 2025,
    name: 'ATC-Simulator',
    description:
      'A multithreaded ATC system with efficient runway resource management via a customer scheduling algorithm that minimizes fuel consumption and delays.',
    technologies: ['C/C++'],
    link: 'https://github.com/Mutter-Liam/Plane-Scheduler',
  },
  {
    year: 2023,
    name: 'Gradescope Submit',
    description:
      'A terminal-based tool that automates Gradescope logins for frequent, streamlined assignment submission.',
    technologies: ['Python', 'Selenium Webdriver'],
    link: 'https://github.com/UnaryPlus/gradescope-submit',
  },
  {
    year: 2023,
    name: 'SwingShift',
    description:
      'Desktop application for efficient file format conversion, featuring an intuitive GUI built with Java Swing and integrated third-party libraries.',
    technologies: [
      'Java',
      'Swing',
      'Abstract Window Toolkit',
      'ilovePDF API',
      'Apache PDFBox',
      'Apache POI XSLF',
    ],
    link: 'https://github.com/ohosman04/SwingShift',
  },
  {
    year: 2023,
    name: 'Space Scuffles',
    description:
      '2D platformer game featuring two distinct game modes and multiple control schemes to provide varied and user-friendly gameplay experiences.',
    technologies: ['Python', 'Pygame'],
    link: 'https://github.com/ohosman04/Space-Scuffles',
  },
  {
    year: 2023,
    name: 'UMunch',
    description:
      'Community-driven social platform for UMass students to check in, rate, and discuss dining hall experiences in real time.',
    technologies: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'MongoDB',
      'Auth0',
      'Render',
      'Git',
    ],
    link: 'https://github.com/UnaryPlus/hackumass2023',
  },
].sort((a, b) => b.year - a.year);

function ProjectTable() {
  return (
    <section id="projects" className="project-table">
      <h2 className="project-table__title">Projects</h2>
      <div className="project-table__wrapper">
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Project</th>
              <th scope="col">Description</th>
              <th scope="col">Technologies</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.name}>
                <td data-label="Year">{project.year}</td>
                <td data-label="Project">{project.name}</td>
                <td data-label="Description">{project.description}</td>
                <td data-label="Technologies">
                  <ul className="project-table__tags">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="project-table__tag">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td data-label="Link" className="project-table__link-cell">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <img src={githubLogo} alt="" />
                    </a>
                  ) : (
                    <span
                      className="project-table__link-placeholder"
                      aria-hidden="true"
                    >
                      <img src={githubLogo} alt="" />
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProjectTable;
