import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Task } from "../../components/Task";
// import { ButtonNewTask } from "../../components/ButtonNewTask";
import { SearchBar } from "../../components/SearchBar";
import { Container, InputContainer,Input,ButtonAdd } from "./style";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { TaskContext} from "../../context/TaskContext";
import {AntDesign } from '@expo/vector-icons';

export interface TaskProps {
  id: number;
  title: string;
  favorited: boolean;
  done: boolean;
}


export function Home({navigation}: {navigation: any}) {
  const [taskName, setTaskName] = useState("")
  const {tasks, createTask} = useContext(TaskContext)

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Adicionar tarefa"
          placeholderTextColor="#888"
          value={taskName}
          onChangeText={setTaskName}
        />
        <ButtonAdd onPress={() => createTask(taskName)}>
          <AntDesign name="plus" size={5} color= 'white' />
        </ButtonAdd>
      </InputContainer>
      
      <StatusBar style="auto" />
      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={tasks}
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
      {/* <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('DetailTask')} /> */}
    </Container>
  );
}
