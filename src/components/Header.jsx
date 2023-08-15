import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="header">
      <div className="logo-ctr">
        <h2 className="nav__primary-heading">Typester</h2>
        <FontAwesomeIcon icon={faKeyboard} />
      </div>
      <div className="theme-toggle-ctr">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => {
            setTheme(!theme ? "light-theme" : "");
          }}
        ></input>
        <label htmlFor="checkbox" className="checkbox-label">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
          <span className="ball"></span>
        </label>
      </div>
      <nav className="nav-ctr">
        <Link to={"/"}>home</Link>
      </nav>
    </header>
  );
};

export default Header;
