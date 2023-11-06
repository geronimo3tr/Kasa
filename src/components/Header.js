import logo from "../image/LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" />
      <nav>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/About">A Propos</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
