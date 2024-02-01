import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";

export const ContainerDetail = styled.View`
    width: 85%;
    height: 85%;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 20px;
    background-color: ${colors.primary};
`;

export const TitleDetail = styled.Text`
    color: #232323;
    font-weight: 700;
    font-size: 18px;
`