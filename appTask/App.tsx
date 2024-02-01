import { AddTask } from "./src/screens/AddTask";
import { Home } from "./src/screens/Home";
import { DetailTask } from "./src/screens/DetailTask"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskProvider from "./src/context/TaskContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>{
        <TaskProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={Home} options={{ title: 'Inicio' }}/>
          <Stack.Screen name='AddTask' component={AddTask} options={{ title: 'Adicionar Tarefa' }}/>
          <Stack.Screen name='Detail' component={DetailTask} options={{ title: 'Detalhes' }}/>
       </Stack.Navigator>
        </TaskProvider>
        }</NavigationContainer>
    
    
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
