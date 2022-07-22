import { useState } from "react"
import { Button } from "./elements/Button"
import { Task } from "./Task"

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Task 1",
            desc: "desc of task",
            reminder: true,
        }, {
            id: 2,
            name: "Task 2",
            desc: "desc of task",
            reminder: true,
        }, {
            id: 3,
            name: "Task 3",
            desc: "desc of task",
            reminder: true,
        }])
        const click = () =>{
            console.log(test)
        }
    return (
        <div className="container mx-auto mt-5 p-10 bg-indigo-400 rounded-3xl shadow-xl">
            {tasks.map((task) => (<Task task={task} />))}
        </div>
    )
}
