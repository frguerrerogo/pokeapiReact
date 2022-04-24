// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyHomePage from "./src/home/my_home_page";
import MyCardPage from "./src/home/my_card_page";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Pokemons" component={MyHomePage} />
        <Stack.Screen name="Pokemon" component={MyCardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
