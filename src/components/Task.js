import { Button } from "./elements/Button"
import { FaTimes } from "react-icons/fa"

export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div id={task.id} className={`flex flex-row bg-blue-300 border-b-2 px-10 rounded my-2 ${task.reminder? "border-l-8 border-green-200":""}` } onDoubleClick={() => {
            onToggle(task.id)
        }}>
            <h1 className="text-white text-lg font-bold p-5 w-1/2">{task.name}</h1>
            <div className="flex justify-end w-1/2">
                <Button classes={"font-bold my-auto rounded-3xl bg-transparent text-red-700 hover:text-red-400"} text={<FaTimes />} click={() => { onDelete(task.id) }}></Button>
            </div>
        </div>
    )
}
