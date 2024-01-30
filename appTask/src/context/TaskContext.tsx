import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert, Task } from "react-native";

interface TaskProps {
    id: number;
    title: string;
    favorited: boolean;
    done: boolean;
}

interface TaskContextProps{
    task: TaskProps;
    tasks: TaskProps[];
    selectTask: (task: TaskProps) => void;
    clearTask: () => void;
    createTask: (title: string) => void;
}

interface TaskProviderProps{
    children: ReactNode;
}


export const TaskContext = createContext<TaskContextProps>({
    task: {id: 0, title: "", favorited: false, done: false},
    tasks: [],
    selectTask: () => {},
    clearTask: () => {},
    createTask: () => {},
});

function TaskProvider({ children }:TaskProviderProps){
    const [task, setTask] = useState({} as TaskProps)
    const [tasks, setTasks] = useState([] as TaskProps[])
    const [count, setCount] = useState<number>(0);

    function createTask(title:string){
        const newTask ={
            id:count,
            title,
            favorited:false,
            done:false
        };
        setCount(count + 1);
        setTasks([...tasks, newTask])
    }
    function selectTask(task: TaskProps) {
        setTask(task);
    }
    
      function clearTask() {
        setTask({} as TaskProps);
    }
    
    return(
        <TaskContext.Provider
        value={{task, selectTask, clearTask, createTask, tasks}}>
            {children}
        </TaskContext.Provider>
    )

}
export default TaskProvider