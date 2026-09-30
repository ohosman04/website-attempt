import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="about section-panel section-panel--deep">
      <SectionHeading category="// 01. ABOUT" title="About Me" />
      <h3 className="about__intro">Nice to (virtually) meet you!</h3>
      <p className="about__copy">
        I am a B.S./M.S. Computer Science student at UMass Amherst with a knack
        for low-level systems, full-stack applications, and applied AI.
      </p>
      <p className="about__copy">
        My background spans building AI deployment automation and GPU cluster
        topologies at NVIDIA, automating real-time container observability at
        Dell Technologies, and building full-stack platforms for the campus
        community.
      </p>
      <p className="about__copy">
        Whether I'm orchestrating multi-model AI workflows on edge hardware or
        helping students navigate computer science coursework as a Course
        Assistant, I love solving complex technical problems from the hardware
        layer up to the browser.
      </p>
    </section>
  );
}

export default About;
