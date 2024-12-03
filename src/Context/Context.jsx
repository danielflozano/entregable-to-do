import { createContext, useState } from "react"
export const taskContext = createContext();

export const TaskProvider = ({children}) => {

    const [task, setTask] = useState([]);

  return (
    <taskContext.Provider value = {{task, setTask}}>
        {children}
    </taskContext.Provider>
  )
}
