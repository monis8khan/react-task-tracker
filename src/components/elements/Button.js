import PropTypes from 'prop-types';

export const Button = ({ text, classes, add_classes, click }) => {
    var btn_class;
    return <button className={add_classes + " " + classes} onClick={click}>{text}</button>
}


Button.defaultProps = {
    text: "Click Me",
    classes: "bg-gray-700 text-indigo-400 px-4 py-2 hover:bg-gray-900 hover:text-indigo-700",
    add_classes: "",
    click: ()=>{ console.log("Hii") }
}


Button.propTypes = {
    text: PropTypes.string,
    classes: PropTypes.string,
    add_classes : PropTypes.string,
    click: PropTypes.func.isRequired,
}
