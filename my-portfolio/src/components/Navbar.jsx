import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          Portfolio
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }>
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;