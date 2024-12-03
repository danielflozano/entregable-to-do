import { useContext, useState } from "react"
import { taskContext } from "../../Context/Context"

export const InputTask = () => {

  const context = useContext(taskContext);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (e) => setNewTask(e.target.value);

  const handleAddTask = () => {
    if(newTask.trim()) {
      context.setTask([...context.task, newTask]);
      setNewTask("")
    }
  }

  return (
    <>
      <input onChange={handleNewTask} value={newTask} type="text" placeholder="Tarea" />
      <button onClick={handleAddTask}>Agregar</button>
    </>
  )
}
