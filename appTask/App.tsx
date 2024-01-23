import { AddTask } from "./src/screens/AddTask";
import { Home } from "./src/screens/Home";
import { DetailTask } from "./src/screens/DetailTask"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <DetailTask/>
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Inicio' }}/>
        <Stack.Screen name='AddTask' component={AddTask} options={{ title: 'Adicionar Tarefa' }}/>
    </Stack.Navigator>
    // <AddTask/>
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
