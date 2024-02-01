import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert, Task } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
    updateTaskStatus: (updatedTask: TaskProps) => void;
    removeTask: (taskId: number) => void
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
    updateTaskStatus:() => {},
    removeTask:() => {},
});

function TaskProvider({ children }:TaskProviderProps){
    const [task, setTask] = useState({} as TaskProps)
    const [tasks, setTasks] = useState([] as TaskProps[])
    const [count, setCount] = useState<number>(0);

    async function storeTask(task: TaskProps[]) {
        try{
            await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
        }catch(e){
            Alert.alert("Erro ao salvar as tarefas!");
        }
    }

    async function loadTasks(){
        try{
            const tasks = await AsyncStorage.getItem("@tasks");
            if(tasks){
                setTasks(JSON.parse(tasks));
            }
        }catch(e){
            Alert.alert("Erro ao carregar as tarefas!");
        }
    }

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

    function updateTaskStatus(updatedTask: TaskProps) {
        const updatedTasks = tasks.map(task => {
            if (task.id === updatedTask.id) {
                return updatedTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function selectTask(task: TaskProps) {
        setTask(task);
    }
    
    function clearTask() {
        setTask({} as TaskProps);
    }
    function removeTask(taskId: number) {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    }
    
    useEffect(() =>{
        loadTasks();
    }, []);

    useEffect(() => {
        storeTask(tasks);
    }, [tasks]);

    return(
        <TaskContext.Provider
        value={{task, selectTask, clearTask, createTask, updateTaskStatus, removeTask, tasks}}>
            {children}
        </TaskContext.Provider>
    )

}
export default TaskProvider