import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

interface TaskProps {
  id: number;
  title: string;
  favorited: boolean;
  done: boolean;
}

interface TaskContextProps {
  task: TaskProps;
  tasks: TaskProps[];
  setTask: (task: TaskProps) => void;
  clearTask: () => void;
  createTask: (title: string) => void;
  updateTaskStatus: (updatedTask: TaskProps) => void;
  removeTask: (taskId: number) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  task: { id: 0, title: "", favorited: false, done: false },
  tasks: [],
  setTask: () => {},
  clearTask: () => {},
  createTask: () => {},
  updateTaskStatus: () => {},
  removeTask: () => {},
});

function TaskProvider({ children }: TaskProviderProps) {
  const [task, setTask] = useState({} as TaskProps);
  const [tasks, setTasks] = useState([] as TaskProps[]);

  function createTask(title: string) {
    const newTask = {
      id: new Date().getTime(),
      title,
      favorited: false,
      done: false,
    };
    setTasks([...tasks, newTask]);
  }

  function updateTaskStatus(updatedTask: TaskProps) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function removeTask(taskId: number) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function clearTask() {
    setTask({} as TaskProps);
  }

  async function loadTasks() {
    try {
      const data = await AsyncStorage.getItem("@tasks");
      if (data) {
        setTasks(JSON.parse(data));
      }
    } catch (err) {
      Alert.alert("Erro ao carregar tarefas");
    }
  }

  async function saveTasks() {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (err) {
      Alert.alert("Erro ao salvar tarefas");
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        clearTask,
        createTask,
        updateTaskStatus,
        removeTask,
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
export default TaskProvider;
