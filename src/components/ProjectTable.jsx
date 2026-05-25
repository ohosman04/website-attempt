import githubLogo from '../../images/GitHub_Invertocat_White.png';

const projects = [
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
];

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
