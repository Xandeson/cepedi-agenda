import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../screens/Home";
import { Container } from "../Home/style";
import { AntDesign } from "@expo/vector-icons";
import { ContainerDetail, TitleDetail, TaskInformations, DeletTaskButton } from "./styles";

type RootStackParamList = {
  Home: undefined;
  Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function DetailTask() {
  const navigation = useNavigation<Props["navigation"]>();
  const { task, removeTask } = useContext(TaskContext);

  const handleDeleteTask = () => {
    removeTask(task.id);
    navigation.goBack();
  };

  return (
    <Container>
      <ContainerDetail done={task.done}>
        <TaskInformations>
          <TitleDetail>Detalhes da tarefa:</TitleDetail>
          <Text>Tarefa: {task.title}</Text>
          <Text>Favoritado: {task.favorited ? "Sim" : "Não"}</Text>
          <Text>Feito: {task.done ? "Sim" : "Não"}</Text>
        </TaskInformations>
        <DeletTaskButton onPress={handleDeleteTask}>
          <Text><AntDesign name="delete" size={24} color="black" /> Excluir</Text>
        </DeletTaskButton>
      </ContainerDetail>
    </Container>
  );
}
