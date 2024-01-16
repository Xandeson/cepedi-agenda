import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";

export const Container = styled.View`
    flex-direction: row;
    width: 85%;
    height: 60px;
    background-color: ${colors.primary};
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`;

export const CheckTask = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    max-width: 30px;
    justify-content: flex-start;
    align-items: center;
    border: solid 1px white;
    border-radius: 50px;
`
export const Title = styled.Text`
    align-items: center;
    justify-content: center;
    color: #ffffff;
`

export const star = styled.View`

`