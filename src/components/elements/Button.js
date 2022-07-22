import PropTypes from 'prop-types';

export const Button = ({ text, classes, click }) => {
    return <button className={classes.join(" ")} onClick={click}>{text}</button>
}


Button.defaultProps = {
    text: "Click Me",
    classes: ["bg-gray-700 text-indigo-400 px-4 py-2 rounded hover:bg-gray-900 hover:text-indigo-700 hover:shadow-xl"],
    click: ()=>{ console.log("Hii") }
}


Button.propTypes = {
    text: PropTypes.string,
    classes: PropTypes.array,
    click: PropTypes.func.isRequired,
}
