import { Button } from "./elements/Button"
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    onclick=(event) =>{
        console.log("Clicked", event);
    }
    return (
        <header className="container mx-auto flex justify-center bg-indigo-400 rounded-3xl border-b-2">
            <h1 className="p-10 text-white text-3xl font-bold w-1/2">
                {title}
            </h1>
            <div className="flex justify-end w-1/2 my-auto p-10">
                {/* <Button></Button> */}
                <Button onClick={onclick} text="Add New Task" classes={["border-b-4", "font-bold","bg-black text-indigo-400 px-4 py-2 rounded hover:bg-gray-900 hover:text-indigo-700 hover:shadow-xl"]}></Button>
            </div>
        </header>
    )
}


Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header