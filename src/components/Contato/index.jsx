import "./styles.scss";
import Button from "../Button";

export default function Contato() {
  return (
    <div className="contato-component__container">
      <div className="txt">
        <b>Interessado em fazer projetos comigo?</b>
      </div>

      <Button>contato</Button>
    </div>
  );
}
