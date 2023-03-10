import { Link } from "react-router-dom";
import me from "../../assets/home/profile.jpg";
import Button from "../../components/Button";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.scss";

export default function Home() {
  return (
    <div className="container home">
      <Header />
      <section className="greetings__container">
        <div className="greetings">
          <div className="message">
            <div className="message__container">
              <p>
                Olá, me chamo Pedro Oliveira e <br /> eu amo construir websites
                lindos
              </p>
            </div>
            <a href="#about-me">
              <div className="button__container">
                <div className="img" />
                <div className="txt__container">
                  <span>sobre mim</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="about-me" className="about__container">
        <div className="about">
          <img src={me} alt="me" />
          <div className="content">
            <h1>Sobre mim</h1>
            <p>
              Sou um desenvolvedor front-end júnior procurando por uma
              oportunidade. Eu foco em escrever HTML acessível, usando práticas
              modernas de CSS e escrevendo um JavaScript limpo. Quando estou
              escrevendo código JavaScript, na maioria das vezes estou usando
              React, mas posso me adapta para qualquer ferramenta se necessário.
              Moro em Monte Azul-MG, mas também seria feliz trabalhando
              remotamente e tenho experiência em times remotos. Quando não estou
              codando, poderá me achar fora de casa. Eu adoro estar próximo a
              natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria
              se você desse uma olhada no meu trabalho.
            </p>
            <Link to="/portfolio">
              <Button>Ir para pórfolio</Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <Contato />
      </section>
      <Footer />
    </div>
  );
}
