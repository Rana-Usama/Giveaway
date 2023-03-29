import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
//config
import Colors from "../config/Colors";

function WelcomeScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Text>Hista lavista baby!</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
});

export default WelcomeScreen;
