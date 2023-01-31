import "./styles.scss";
import logo from "../../assets/logo-light.svg";
import github from "../../assets/icons/github-light.svg";
import twitter from "../../assets/icons/twitter-light.svg";
import linkedin from "../../assets/icons/linkedin-light.svg";
import { Link } from "react-router-dom";

const socialOptions = [
  { img: github, href: "https://github.com/dev-peu" },
  { img: twitter, href: "https://twitter.com/HoliveirasPedro" },
  {
    img: linkedin,
    href: "https://www.linkedin.com/in/pedro-oliveira-ab090523a/",
  },
];

export default function Footer() {
  return (
    <footer>
      <img class="logo--responsiva" src={logo} alt="logo" />
      <ul className="nav__container">
        <li>
          <img className="logo" src={logo} alt="logo" />
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className="social-web">
        <ul>
          {socialOptions.map((opt) => (
            <li key={opt.img}>
              <a href={opt.href}>
                <img src={opt.img} alt="web-social" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
