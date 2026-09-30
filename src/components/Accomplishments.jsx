const accomplishments = [
  "B.S. in Computer Science — Cum Laude, Commonwealth Honors College Scholar with Greatest Distinction",
  "Bay State Scholar (M.S. in Computer Science)",
  "UMass Amherst Chancellor's Merit Scholarship Award",
  "UMass Amherst Dean's International Scholarship Award",
  "UMass Amherst Dean's List (Fall '22 - Spring '26)",
  "HackUMass XI Winner — Best Use of Auth0",
  "Undergraduate Course Assistant @ UMass CICS",
  "Manning Undergraduate Student Impact Committee (MUSIC) Member"
];

function Accomplishments() {
  return (
    <section className="Accomplishments">
      <h2 className="section-title">Achievements</h2>
      {accomplishments.map((item) => (
        <h2 key={item}>{item}</h2>
      ))}
    </section>
  );
}

export default Accomplishments;
