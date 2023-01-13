import PropTypes from 'prop-types'

const Button = () => {
return <button  className='button'></button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button;