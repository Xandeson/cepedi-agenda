import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";
import { Button } from "../../components/Button";

export interface ContainerProps {
    done: boolean;
}

export const ContainerDetail = styled.View<ContainerProps>`
    width: 85%;
    height: 55%;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 20px;
    background-color: ${props => props.done ? colors.corDestaque : colors.primary};
`;

export const TitleDetail = styled.Text`
    color: #232323;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 50px;
`
export const TaskInformations = styled.View`
    gap: 8px;
`

export const DeletTaskButton = styled.TouchableOpacity`
    width: 100%;
    background-color:#ba6f6a;
    border-radius: 5px;
    align-items: center;
    padding: 10px;
`