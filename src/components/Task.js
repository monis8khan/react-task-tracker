import { Button } from "./elements/Button"

export const Task = ({ task }) => {
    return (
        <div className="flex flex-row border-t-2 border-dashed last:border-b-2 justify-center">
            <h1 className="text-white text-lg font-bold p-5 w-1/2">{task.name}</h1>
            {/* <Button onClick={onclick} text="Add New Task" classes={["border-b-4", "font-bold", "bg-black text-indigo-400 px-4 py-2 rounded hover:bg-gray-900 hover:text-indigo-700 hover:shadow-xl"]}></Button> */}
            <Button></Button>
        </div>
    )
}
