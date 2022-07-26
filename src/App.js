import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
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
  const deleteTasks = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id))
    console.log(tasks);
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      ))
  }

  return (
    <>
      <Header></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTasks}></Tasks> : <h1 className="text-center bg-indigo-400 rounded-full container mx-auto text-white text-2xl p-4 mt-5">No Tasks</h1>}
    </>
  );
}

export default App;
