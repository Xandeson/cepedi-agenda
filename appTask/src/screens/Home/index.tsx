import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../../components/Task';
import {Button} from '../../components/Button';
import { Container } from "./style";

export function Home(){

    return(
        <Container>
        <Task/>
        <StatusBar style="auto" />
        <View>
            <Button/>
        </View>
        </Container>
       
    );
}
