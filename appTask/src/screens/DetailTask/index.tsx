import { Button, View, Text } from 'react-native';
import { Container } from "../Home/style";
import { ContainerDetail} from "./styles";

export function DetailTask(){
    return(
        <Container>
            <ContainerDetail>
                <Text>recuperar titulo</Text>
                <Text>recuperar descrição</Text>
                <Text>excluir tarefa</Text>
            </ContainerDetail>
        </Container>
    )
    
}