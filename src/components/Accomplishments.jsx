const accomplishments = [
  {
    category: "Education",
    accent: "education",
    title:
      "B.S. in Computer Science — Cum Laude, Commonwealth Honors College Scholar with Greatest Distinction",
  },
  {
    category: "Scholarship",
    accent: "scholarship",
    title: "Bay State Scholar (M.S. in Computer Science)",
  },
  {
    category: "Scholarship",
    accent: "scholarship",
    title: "UMass Amherst Chancellor's Merit Scholarship Award",
  },
  {
    category: "Scholarship",
    accent: "scholarship",
    title: "UMass Amherst Dean's International Scholarship Award",
  },
  {
    category: "Academic Honors",
    accent: "academic",
    title: "UMass Amherst Dean's List (Fall '22 - Spring '26)",
  },
  {
    category: "Competition",
    accent: "competition",
    title: "HackUMass XI Winner — Best Use of Auth0",
  },
  {
    category: "Teaching",
    accent: "teaching",
    title: "Undergraduate Course Assistant @ UMass CICS",
  },
  {
    category: "Leadership",
    accent: "leadership",
    title: "Manning Undergraduate Student Impact Committee (MUSIC) Member",
  },
];

function Accomplishments() {
  return (
    <section className="Accomplishments" aria-labelledby="achievements-title">
      <h2 className="section-title" id="achievements-title">
        Achievements
      </h2>
      <ul className="achievements-grid">
        {accomplishments.map(({ accent, category, title }) => (
          <li
            className={`achievement-card achievement-card--${accent}`}
            key={title}
          >
            <span className="achievement-category">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                focusable="false"
              >
                <path
                  d="M10 2.25 12.1 6.5l4.7.68-3.4 3.31.8 4.68L10 12.96l-4.2 2.21.8-4.68-3.4-3.31 4.7-.68L10 2.25Z"
                  fill="currentColor"
                />
              </svg>
              {category}
            </span>
            <h3 className="achievement-title">{title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Accomplishments;
