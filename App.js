import React from "react";
import { View } from "react-native";
import Splash from "./Src/Screens/Splash";
import Home from "./Src/Screens/Home";
import BottomTab from "./Src/Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default App