import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../screens/Home";
import { Container } from "../Home/style";
import { ContainerDetail, TitleDetail } from "./styles";

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
      <ContainerDetail>
        <TitleDetail>Detalhes da tarefa:</TitleDetail>
        <Text>Tarefa: {task.title}</Text>
        <Text>Favoritado: {task.favorited ? "sim" : "não"}</Text>
        <Text>Feito: {task.done ? "sim" : "não"}</Text>
        <Button title="Excluir tarefa" onPress={handleDeleteTask} />
      </ContainerDetail>
    </Container>
  );
}
