const Button = ({color, text}) => {
    return ( <button style={{backgroundColor: color }} 
    className = 'btn'> 
    {text} 
    </button>
    )
}

Button.defaultProps = {
    colour: 'steelblue',
}

Button.PropTypes = {
    text: Proptypes.string,
    color: PropTypes.string,
}

export default Buttonsss