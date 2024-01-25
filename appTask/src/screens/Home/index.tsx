import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Task } from "../../components/Task";
// import { ButtonNewTask } from "../../components/ButtonNewTask";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "./style";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

export interface TaskProps {
  id: number;
  title: string;
  favorited: boolean;
  done: boolean;
}


//lista de tasks (Temporario)
const TASKS = [
  {
    id: 1,
    title: "Desenvolver o APP",
    favorited: true,
    done: false,
  },
  {
    id: 2,
    title: "Lavar a louça",
    favorited: false,
    done: false,
  },
  {
    id: 3,
    title: "Formatar o computador",
    favorited: false,
    done: false,
  },
  {
    id: 4,
    title: "Estudar Styled Components",
    favorited: true,
    done: true,
  },
];

export function Home({navigation}: {navigation: any}) {
  const [task, setTask] = useState(TASKS)

  return (
    <Container>
      <StatusBar style="auto" />
      <SearchBar/>
      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={task}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: TaskProps }) => (
          <Task id={item.id} title={item.title} done={item.done} favorited={item.favorited} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 32,
          
        }}
        ListEmptyComponent={
          <>
            <Text>Lista vazia</Text>
          </>
        }
      />
      <View>
      </View>
      
      {/* <ButtonNewTask onPress={() => navigation.navigate('AddTask')} /> */}
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask')} />
    </Container>
  );
}
