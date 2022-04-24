import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorContainer } from "@react-navigation/native";
import MyHomePage from "../home/my_home_page";
import MyCardPage from "../home/my_card_page";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigatorContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyHomePage} />
        <Stack.Screen name="pokemon" component={MyCardPage} />
      </Stack.Navigator>
    </NavigatorContainer>
  );
}

export default MainStack;
