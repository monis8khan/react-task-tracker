
export const Button = ({ text, Classes }) => {
    return <button className={Classes.join(" ")}>{text}</button>
}


Button.defaultProps = {
    text: "Click Me",
    Classes: ["bg-gray-700 text-indigo-400 px-4 py-2 rounded hover:bg-gray-900 hover:text-indigo-700 hover:shadow-xl"]
}