import './Button.css'

function Button(props) {
    return(
        <button
        className='Button'
        style={props.style}
        onClick={props.onClickBtn}
        >
           {props.btnText}
        </button>
    )
}

export default Button;