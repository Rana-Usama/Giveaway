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
import HomeScreen from "./app/screens/HomeScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import MapScreen from "./app/screens/MapScreen";
import DetailsPageScreen from "./app/screens/DetailsPageScreen";
import AddProductScreen from "./app/screens/AddProductScreen";

const Stack = createStackNavigator();

console.disableYellowBox = true;

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="DetailsPageScreen" component={DetailsPageScreen} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Happy Coding :)
