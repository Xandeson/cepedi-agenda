import { Container, CheckTask, Title} from "./styles"
import {AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import { colors } from "../../styles/variaveis";
import { TaskProps } from "../../screens/Home";

export function Task({ id, title, done, favorited, ...others }:TaskProps){
    return(
        <Container {...others}>
            <CheckTask/>
            <Title>{title}</Title>
            <AntDesign name="staro" size={25} color={colors.secundary} />
        </Container>   
    );
}


