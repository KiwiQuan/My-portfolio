const Skills = () => {
  const languages = ["HTML", "CSS", "JavaScript", "Python"];
  const technologies = ["JQuery", "Bootstrap", "Flask", "SQLite", "React"];

  return (
    <section className="skills">
      <article className="skills__languages">
        <h2>Languages I Know</h2>
        <ul className="skills__list">
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </article>
      
      <article className="skills__frameworks">
        <h2>Technologies I Know</h2>
        <ul className="skills__list">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Skills; 