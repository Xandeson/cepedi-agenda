import { Container, CheckTask, Title} from "./styles"
import {AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import { colors } from "../../styles/variaveis";

export function Task(){
    return(
        <Container>
            <CheckTask/>
            <Title> Tarefa 1</Title>
            <AntDesign name="staro" size={25} color={colors.secundary} />
        </Container>   
    );
}


