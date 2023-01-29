import "./styles.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div className="contato-component__container">
      <div className="txt">
        <b>Interessado em fazer projetos comigo?</b>
      </div>

      <Button>
        <Link to={"/contato"}>contato</Link>
      </Button>
    </div>
  );
}
