import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
import MyAppButton from "./../components/common/MyAppButton";

//config
import Colors from "../config/Colors";

function WelcomeScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* Image */}
      <Image style={{ left: RFPercentage(3), width: RFPercentage(36), height: RFPercentage(31), marginTop: RFPercentage(5) }} source={require("../../assets/Images/bag.png")} />

      <Text style={{ marginTop: RFPercentage(5), color: Colors.primary, fontSize: RFPercentage(5), fontFamily: "VarelaRound_400Regular" }}>למסירה ב-</Text>

      <Image style={{ width: RFPercentage(10), height: RFPercentage(10), marginTop: RFPercentage(3) }} source={require("../../assets/Images/heart.png")} />

      <Text style={{ marginTop: RFPercentage(3), color: Colors.darkOrange, fontSize: RFPercentage(5), fontFamily: "VarelaRound_400Regular" }}>לא זורקים!</Text>
      <Text style={{ marginTop: RFPercentage(1), color: Colors.darkOrange, fontSize: RFPercentage(5), fontFamily: "VarelaRound_400Regular" }}> מוסרים!</Text>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
        <MyAppButton
          title="הַבָּא"
          // onPress={() => props.navigation.navigate("SignInScreen")}
          padding={RFPercentage(2)}
          backgroundColor={Colors.darkOrange}
          borderColor={Colors.white}
          borderWidth={RFPercentage(0.2)}
          color={Colors.white}
          bold={false}
          fontSize={RFPercentage(2.2)}
          fontFamily={"VarelaRound_400Regular"}
          borderRadius={RFPercentage(1.6)}
          width={"65%"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default WelcomeScreen;
