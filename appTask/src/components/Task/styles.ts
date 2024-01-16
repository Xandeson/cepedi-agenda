import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";

export const Container = styled.View`
    width: 85%;
    height: 60px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: start;
    border-radius: 5px;
`;

export const CheckTask = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
    border-radius: 50px;
    margin-left: 3%;
    flex: 2;
`
