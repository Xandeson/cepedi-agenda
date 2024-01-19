import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";

export const Conteiner = styled.View`
    aling-items: center;
    position: absolute;
    top: 280px;
    left: 140px;
`;
export const Bott = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    right: 20%;
    background-color: ${colors.primary};
`;