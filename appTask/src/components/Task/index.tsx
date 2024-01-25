import { Container, CheckTask, Title, Star} from "./styles"
import React, { useState } from 'react';
import {AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet} from "react-native";
import { colors } from "../../styles/variaveis";
import { TaskProps } from "../../screens/Home";


export function Task({ id, title, done, favorited, ...others }:TaskProps){
    const [isFavorited, setIsFavorited] = useState(favorited);
    const [isDone, setIsDone] = useState(done)
    

    const toggleFavorited = () => {
        setIsFavorited(!isFavorited);
    }
    const toggleDone = () =>{
        setIsDone(!isDone);
    }
    return(
        <Container done={isDone} {...others}>
            <CheckTask onPress={toggleDone}>
                {isDone ? <AntDesign name="checkcircle" size={28} color="white" /> : null}
            </CheckTask>
            <Title>{title}</Title>
            <Star onPress={toggleFavorited}>
                <AntDesign name={isFavorited ? "star" : "staro"} size={25} color={colors.secundary} />
            </Star>
            
        </Container>   
    );
}


