import "./styles.scss";
import logo from "../../assets/logo-light.svg";
import github from "../../assets/icons/github-light.svg";
import twitter from "../../assets/icons/twitter-light.svg";
import linkedin from "../../assets/icons/linkedin-light.svg";

const navOptions = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Portfolio",
    href: "",
  },
  {
    title: "Contato",
    href: "",
  },
];

const socialOptions = [
  { img: github, href: "" },
  { img: twitter, href: "" },
  { img: linkedin, href: "" },
];

export default function Footer() {
  return (
    <footer>
      <ul className="nav__container">
        <li>
          <img src={logo} alt="logo" />
        </li>
        {navOptions.map((opt) => (
          <li key={opt.title}>
            <a href={opt.href}>{opt.title}</a>
          </li>
        ))}
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
