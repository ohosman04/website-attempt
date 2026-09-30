function SectionHeading({ category, title, id }) {
  return (
    <header className="section-heading">
      <p className="section-heading__category">{category}</p>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
    </header>
  );
}

export default SectionHeading;
