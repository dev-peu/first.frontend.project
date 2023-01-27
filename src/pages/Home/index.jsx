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
                Olá, me chamo Pedro Oliveira e eu amo construir websites lindos
              </p>
            </div>
            <div>
              <button>sobre mim</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
