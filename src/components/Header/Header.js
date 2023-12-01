import logo from "../../image/LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Kasa" />
      <nav>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
