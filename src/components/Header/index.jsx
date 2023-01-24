import "./styles.scss";
import logo from "../../assets/logo-dark.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navOptions = [
    { title: "HOME", href: "/home" },
    { title: "PORTFOLIO", href: "/portfolio" },
    { title: "CONTATO", href: "/contato" },
  ];

  const location = useLocation();
  const page = location.pathname;

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          {navOptions.map((opt) => (
            <li className={opt.href === page ? "ativo" : ""} key={opt.title}>
              {opt.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
