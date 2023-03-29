import React from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { VarelaRound_400Regular, useFonts } from "@expo-google-fonts/varela-round";
import { RFPercentage } from "react-native-responsive-fontsize";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignInScreen from "./app/screens/SignInScreen";
import SelectionScreen from "./app/screens/SelectionScreen";

const Stack = createStackNavigator();

export default function App() {
  // Font
  const [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  if (!fontsLoaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
      </View>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Happy Coding :)
