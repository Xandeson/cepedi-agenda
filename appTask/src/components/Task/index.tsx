import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../screens/Home";
import { colors } from "../../styles/variaveis";
import { CheckTask, Container, Star, Title } from "./styles";

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, done, favorited, ...others }: TaskProps) {
  const navigation = useNavigation<Props["navigation"]>();

  const { setTask, updateTaskStatus } = useContext(TaskContext); // Obter função updateTaskStatus do contexto
  const [isFavorited, setIsFavorited] = useState(favorited);
  const [isDone, setIsDone] = useState(done);

  function handlePress() {
    setTask({ id, title, favorited, done });
    navigation.navigate("Detail");
  }

  const toggleFavorited = () => {
    setIsFavorited(!isFavorited);
  };

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  useEffect(() => {
    const updatedTask = {
      id,
      title,
      favorited: isFavorited,
      done: isDone,
    };
    updateTaskStatus(updatedTask);
  }, [isFavorited, isDone]);

  return (
    <Container done={isDone} {...others} onPress={() => handlePress()}>
      <CheckTask onPress={toggleDone}>
        {isDone ? (
          <AntDesign name="checkcircle" size={28} color="white" />
        ) : null}
      </CheckTask>
      <Title>{title}</Title>
      <Star onPress={toggleFavorited}>
        <AntDesign
          name={isFavorited ? "star" : "staro"}
          size={25}
          color={colors.secundary}
        />
      </Star>
    </Container>
  );
}
