import "./styles.scss";

export default function Button(props) {
  return (
    <button onClick={() => props.onClick} className="default-button">
      {props.children}
    </button>
  );
}
