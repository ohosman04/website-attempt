import githubLogo from '../../images/GitHub_Invertocat_White.png';

const projects = [
  {
    year: 2026,
    name: 'Tutorin',
    featuredDescription:
      'An offline oral-exam agent built for the Jetson Orin Nano. It combines speech recognition, LLM-based grading, and spoken feedback using three in-memory models with no cloud dependencies.',
    description:
      'An offline oral-exam agent built on a Jetson Orin Nano, orchestrating speech-to-text, LLM grading, and text-to-speech feedback with 3 in-memory models and zero cloud dependencies.',
    technologies: [
      'Python',
      'Faster-Whisper',
      'Qwen2.5',
      'Piper TTS',
      'Ollama',
      'Linux',
    ],
    link: 'https://github.com/ohosman04/tutorin', // Update with direct repo link if available
  },
  {
    year: 2026,
    name: 'Probing the Grammar Machine',
    featuredDescription:
      'A layer-wise study of how BERT encodes grammatical information. The project uses mechanistic analysis to probe representations across the model.',
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
    featuredDescription:
      'An e-commerce platform built for students across the Five Colleges. It helps student creators sell products and services to their campus communities.',
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
  const featuredProjects = projects
    .filter((project) => project.featuredDescription)
    .slice(0, 3);

  return (
    <section id="projects" className="project-table">
      <h2 className="project-table__title">Featured Projects</h2>
      <ul className="featured-projects">
        {featuredProjects.map((project) => (
          <li className="featured-project" key={project.name}>
            <div className="featured-project__heading">
              <h3 className="featured-project__name">{project.name}</h3>
              <span className="featured-project__year">{project.year}</span>
            </div>
            <p className="featured-project__description">
              {project.featuredDescription}
            </p>
            <ul className="featured-project__tags" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li className="project-table__tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            <a
              className="featured-project__link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub (opens in a new tab)`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
              View on GitHub
            </a>
          </li>
        ))}
      </ul>

      <h2 className="project-table__title project-table__title--all">
        All Projects
      </h2>
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
