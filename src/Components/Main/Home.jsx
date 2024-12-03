import { InputTask } from "../Others/InputTask";
import { ListTasks } from "../Others/ListTasks";


export const Home = () => {
  return (
    <>
      <h1>Organizador de Tareas</h1>
      <div class ="input-task">
        <InputTask/>
      </div>
      <ListTasks/>
    </>
  )
}
