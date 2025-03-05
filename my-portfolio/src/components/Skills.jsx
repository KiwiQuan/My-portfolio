import { FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiJquery, SiBootstrap, SiFlask, SiSqlite, SiReact } from "react-icons/si";

const Skills = () => {
  const languages = [{name: "HTML", icon: <FaHtml5 />},
                     {name: "CSS", icon: <FaCss3Alt />}, 
                     {name: "JavaScript", icon: <FaJs />}, 
                     {name: "Python", icon: <FaPython />}];
  
  const technologies = [{name: "Javascript", icon: <FaJs />}, 
                        {name: "Bootstrap", icon: <SiBootstrap />}, 
                        {name: "Flask", icon: <SiFlask />}, 
                        {name: "SQLite", icon: <SiSqlite />}, 
                        {name: "React", icon: <SiReact />}];

  return (
    <section className="skills">
      <article className="skills__languages">
        <h2>Languages I Know</h2>
        <ul className="skills__list">
          {languages.map((lang) => (
            <li key={lang.name}>{lang.icon} {lang.name}</li>
          ))}
        </ul>
      </article>
      
      <article className="skills__frameworks">
        <h2>Technologies I Know</h2>
        <ul className="skills__list">
          {technologies.map((tech) => (
            <li key={tech.name}>{tech.icon} {tech.name}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Skills; 