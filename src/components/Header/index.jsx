import "./styles.scss";
import logo from "../../assets/logo-dark.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const page = location.pathname;

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <Link to="/home">
            <li className={page === "/home" ? "ativo" : ""}>Home</li>
          </Link>
          <li>
            <a href="">Portfolio</a>
          </li>
          <Link to="/contato">
            <li className={page === "/contato" ? "ativo" : ""}>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
