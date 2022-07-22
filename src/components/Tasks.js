import { useState } from "react"
import { Task } from "./Task"

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Task 1",
            desc: "desc of task",
            reminder: true,
        },
        {
            id: 2,
            name: "Task 2",
            desc: "desc of task",
            reminder: true,
        }, 
        {
            id: 3,
            name: "Task 3",
            desc: "desc of task",
            reminder: true,
        }
    ])
    return (
        <div className="container mx-auto mt-5 p-10 bg-indigo-400 rounded-3xl shadow-xl">
            <h1 className="text-white font-bold text-2xl mb-2">Tasks List</h1>
            {tasks.map((task) => (<Task key={task.id.toString()} task={task} />))}
        </div>
    )
}
