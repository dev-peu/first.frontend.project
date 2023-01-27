import Footer from "../../components/Footer";
import Header from "../../components/Header";
import me from "../../assets/home/profile.jpg";
import "./styles.scss";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className="container home">
      <Header />
      <section>
        <div className="greetings">
          <div className="message">
            <div className="message__container">
              <p>
                Olá, me chamo Pedro Oliveira e <br /> eu amo construir websites
                lindos
              </p>
            </div>
            <div className="button__container">
              <div className="img" />
              <div className="txt__container">
                <span>sobre mim</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about">
          <img src={me} alt="photo of me" />
          <div className="content">
            <h1>Sobre mim</h1>
            <p>
              Sou um desenvolvedor front-end júnior procurando por uma
              oportunidade. Eu foco em escrever HTML acessível, usando práticas
              modernas de CSS e escrevendo um JavaScript limpo. Quando estou
              escrevendo código JavaScript, na maioria das vezes estou usando
              React, mas posso me adapta para qualquer ferramenta se necessário.
              Moro em Londres, UK, mas também seria feliz trabalhando
              remotamente e tenho experiência em times remotos. Quando não estou
              codando, poderá me achar fora de casa. Eu adoro estar próximo a
              natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria
              se você desse uma olhada no meu trabalho.
            </p>
            <Button>IR PARA PORTFOLIO</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
