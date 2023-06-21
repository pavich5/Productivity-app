import "./Button.css";

function Button(props) {
  return (
    <button
      className="Button"
      onClick={props.onClick}
      style={props.btnStyle}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
