import { Container, CheckTask} from "./styles"
import { Text, StyleSheet } from "react-native";

export function Task(){
    return(
        <Container>
            <Text style = {styles.Titulo}>Tarefa 1</Text>
            <CheckTask/>
        </Container>   
    );
}

const styles = StyleSheet.create({
    Titulo: {
      textAlign: "center",
      alignItems: "center",
      color: 'white',
      flex: 2
    },
  })

