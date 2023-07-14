import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-ctr">
        <h2 className="nav__primary-heading">Typester</h2>
        <FontAwesomeIcon icon={faKeyboard} />
      </div>
      <nav className="nav-ctr">
        <Link to={"/"}>home</Link>
      </nav>
    </header>
  );
};

export default Header;
