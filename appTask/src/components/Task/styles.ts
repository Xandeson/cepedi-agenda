import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";

export interface ContainerProps {
    done: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    flex-direction: row;
    width: 100%;
    height: 60px;
    background-color: ${props => props.done ? colors.corDestaque : colors.primary};
    padding: 10px 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
`;

export const CheckTask = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    max-width: 30px;
    justify-content: start;
    align-items: center;
    border: solid 1px white;
    border-radius: 50px;
`
export const Title = styled.Text`
    align-items: center;
    justify-content: center;
    color: #ffffff;
`

export const Star = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
`