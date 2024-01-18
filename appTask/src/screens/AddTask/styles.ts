import styled from "styled-components/native";
import { colors } from "../../styles/variaveis";


export const ContainerAddTask = styled.View`
    width: 85%;
    height: 85%;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 20px;
    background-color: ${colors.primary};
`;

export const Title = styled.Text`
    font-weight: 900;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: ${colors.secundary};
    margin-bottom: 30px;
    
` 
export const FormContainer = styled.View`
    width: 100%;
    flex: 1;
    gap: 20px;
`


export const Input = styled.TextInput`
    width: 100%;
    padding: 4px;
    border-radius: 3px;
    background-color: white;
`

export const Label = styled.Text`
    color: ${colors.secundary};
    font-size: 14px;
   
`