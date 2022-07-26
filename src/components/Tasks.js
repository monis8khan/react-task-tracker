import { Task } from "./Task"

export const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <div className="container mx-auto mt-5 p-10 bg-indigo-400 rounded-3xl shadow-xl">
            <h1 className="text-white font-bold text-2xl mb-2">Tasks List</h1>
            {tasks.map((task) => (<Task key={task.id.toString()} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </div>
    )
}
