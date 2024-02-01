import { Container, CheckTask, Title, Star } from "./styles";
import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import { colors } from "../../styles/variaveis";
import { TaskProps } from "../../screens/Home";
import { TaskContext } from "../../context/TaskContext";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, done, favorited, ...others }: TaskProps) {
    const [task, setTask] = useState<TaskProps>({ id, title, done, favorited });
    const { selectTask, updateTaskStatus } = useContext(TaskContext); // Obter função updateTaskStatus do contexto
    const [isFavorited, setIsFavorited] = useState(favorited);
    const [isDone, setIsDone] = useState(done);
    
    const navigation = useNavigation<Props['navigation']>();

    function handlePress() {
        selectTask(task);
        navigation.navigate('Detail', task);
    }

    const toggleFavorited = () => {
        setIsFavorited(!isFavorited);
    }

    const toggleDone = () => {
        const updatedTask = { ...task, done: !isDone };
        setIsDone(!isDone);
        updateTaskStatus(updatedTask); // Chamar a função updateTaskStatus do contexto
    }

    return (
        <Container done={isDone} {...others} onPress={() => handlePress()}>
            <CheckTask onPress={toggleDone}>
                {isDone ? <AntDesign name="checkcircle" size={28} color="white" /> : null}
            </CheckTask>
            <Title>{title}</Title>
            <Star onPress={toggleFavorited}>
                <AntDesign name={isFavorited ? "star" : "staro"} size={25} color={colors.secundary} />
            </Star>
        </Container>   
    );
}