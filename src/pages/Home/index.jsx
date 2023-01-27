import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.scss";

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
      <Footer />
    </div>
  );
}
