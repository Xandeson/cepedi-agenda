import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "../../components/Task";
import { Button } from "../../components/Button";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "./style";

export interface TaskProps {
  id: number;
  title: string;
  favorited: boolean;
  done: boolean;
}

//lista de tasks (Temporario)
const TASKS = [
  {
    id: 1,
    title: "Desenvolver o APP",
    favorited: true,
    done: false,
  },
  {
    id: 2,
    title: "Lavar a louça",
    favorited: false,
    done: false,
  },
  {
    id: 3,
    title: "Formatar o computador",
    favorited: false,
    done: false,
  },
  {
    id: 4,
    title: "Estudar Styled Components",
    favorited: true,
    done: true,
  },
];

export function Home() {
  const [task, setTask] = useState()

  return (
    <Container>
      <SearchBar/>
      <Task title="Task 1" id={1} done={true} favorited={false} />

      <StatusBar style="auto" />
      <View>
        <Button />
      </View>
    </Container>
  );
}
