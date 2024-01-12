import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../../components/Task';
import { Container } from "./style";

export function Home(){

    return(
        <Container>
        <Task/>
        <StatusBar style="auto" />
        </Container>
    );
}
