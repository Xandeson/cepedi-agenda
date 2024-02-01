import { Button, View, Text } from 'react-native';
import { Container } from "../Home/style";
import { ContainerDetail} from "./styles";

import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TaskProps } from "../../screens/Home";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type RootStackParamList = {
    Home: undefined;
    Detail: TaskProps;
  };

type Props = NativeStackScreenProps<RootStackParamList>;

export function DetailTask(){
    const navigation = useNavigation<Props['navigation']>();
    const {task} = useContext(TaskContext);
    
    return(
        <Container>
            <ContainerDetail>
                <Text>recuperar titulo</Text>
                <Text>recuperar descrição</Text>
                <Text>excluir tarefa</Text>
            </ContainerDetail>
        </Container>
    )
    
}