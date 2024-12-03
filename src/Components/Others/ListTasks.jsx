import { useContext, useEffect } from "react"
import { taskContext } from "../../Context/Context"

export const ListTasks = () => {

  const context = useContext(taskContext);
  useEffect(() => console.log(context), []);

  return (
    <ul>
      {
        context.task.map((tsk, index) => <li key = {index}>{tsk}</li>)
      }
    </ul>
  )
}
