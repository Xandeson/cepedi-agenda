import { Container } from "../Home/style";
import { ContainerAddTask, Title, Input, Label, FormContainer} from "./styles";
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Desenvolver o componente botão e alterar containeraddTask para space-between
// acho que da pra fazer uma estilização mais global de ContainerAddTask

export function AddTask({navigation}: {navigation: any}){
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
                <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('Home')} />
            </ContainerAddTask>
        </Container>
    )

}