import { View } from "react-native";
import { Container } from "../Home/style";
import { ContainerAddTask, Title, Input, Label, FormContainer} from "./styles";

// Desenvolver o componente botão e alterar containeraddTask para space-between
// acho que da pra fazer uma estilização mais global de ContainerAddTask

export function AddTask(){
    return (
        <Container>
            <ContainerAddTask>
                <Title>Adicionar tarefa:</Title>
                <FormContainer>
                    <View>
                        <Label>Titulo:</Label>
                        <Input placeholder="titulo da tarefa"></Input>
                    </View>

                    <View>
                        <Label>Descrição:</Label>
                        <Input placeholder="Descrição da tarefa"></Input>
                    </View>

                    <View>
                        <Label>Prazo:</Label>
                        <Input placeholder="dd/mm/yyyy"></Input>
                    </View>
                    
                </FormContainer>       
            </ContainerAddTask>
        </Container>
    )

}