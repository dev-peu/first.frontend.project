import "./styles.scss";

export default function Button(props) {
  return <button className="default-button">{props.children}</button>;
}
