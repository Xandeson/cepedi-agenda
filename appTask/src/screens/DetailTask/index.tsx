import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { Container } from "../Home/style";
import { ContainerDetail, TitleDetail } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TaskProps } from "../../screens/Home";
import { TaskContext } from "../../context/TaskContext";

type RootStackParamList = {
    Home: undefined;
    Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function DetailTask() {
    const navigation = useNavigation<Props['navigation']>();
    const { task, removeTask } = useContext(TaskContext);

    const handleDeleteTask = () => {
        removeTask(task.id);
        navigation.goBack(); // Navegar de volta após excluir a tarefa
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
