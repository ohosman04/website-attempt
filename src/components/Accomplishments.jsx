const accomplishments = [
  "1- UMass Amherst Chancellor's Merit Scholarship Award",
  "2- UMass Amherst Dean's International Scholarship Award",
  '3- Commonwealth Honors College Student',
  '4- Undergraduate Course Assistant @ UMass CICS',
  '5- Manning Undergraduate Student Impact Committee (MUSIC) Member',
  "6- Dean’s List (Fall ‘22 -> Spring ‘25)",
  '7- HackUMass XI Winner - Best Use of Auth0',
];

function Accomplishments() {
  return (
    <section className="Accomplishments">
      <p>Accomplishments</p>
      {accomplishments.map((item) => (
        <h2 key={item}>{item}</h2>
      ))}
    </section>
  );
}

export default Accomplishments;
