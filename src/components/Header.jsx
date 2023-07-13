import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="nav">
      <h1 className="nav__primary-heading">Typester</h1>
      <FontAwesomeIcon icon={faKeyboard} />
    </nav>
  );
};

export default Header;
