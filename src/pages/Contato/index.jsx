import Footer from "../../components/Footer";
import Header from "../../components/Header";
import github from "../../assets/icons/github-dark.svg";
import twitter from "../../assets/icons/twitter-dark.svg";
import linkedin from "../../assets/icons/linkedin-dark.svg";
import "./styles.scss";

const socialOptions = [
  { img: github, href: "https://github.com/dev-peu" },
  { img: twitter, href: "https://twitter.com/HoliveirasPedro" },
  {
    img: linkedin,
    href: "https://www.linkedin.com/in/pedro-oliveira-ab090523a/",
  },
];

export default function Contato() {
  return (
    <div className="container contato">
      <Header />
      <main>
        <section className="message">
          <h1>Entre em Contato</h1>
          <div className="content column">
            <p>
              Eu adoraria escutar sobre seu trabalho atual e como eu poderia
              ajudar. Atualmente estou procurando por um cargo e aberto para
              várias oportunidades. Minha preferência é uma oportunidade em uma
              empresa Britânica. Mas também estou feliz em escutar sobre
              oportunidades remotas. Sou uma pessoa trabalhadora e positiva que
              sempre fará as tasks com um senso de propósito e atenção aos
              detalhes. Fique livre para checar meu perfis abaixo e entrar em
              contato utilizando o formulário.
            </p>
            <ul className="social-web">
              {socialOptions.map((opt) => (
                <li key={opt.img}>
                  <a href={opt.href}>
                    <img src={opt.img} alt="web-social" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="input__section">
          <h1>Contato</h1>
          <form className="column">
            <div className="inputs column">
              <label htmlFor="">
                Nome
                <input type="text" />
              </label>
              <label htmlFor="">
                E-mail
                <input type="text" />
              </label>
              <label htmlFor="">
                Mensagem
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </label>
            </div>
            <button>Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
