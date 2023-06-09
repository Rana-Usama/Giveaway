import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ImageBackground, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function BottomTab(props) {
  const navigation = useNavigation();

  return (
    <ImageBackground style={{ width: "100%", height: RFPercentage(10), flexDirection: "row", justifyContent: "center", alignItems: "center" }} source={require("../../../assets/Images/bt.png")}>
      {/* Left Buttons */}
      <View style={{ width: "45%", position: "absolute", left: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductsScreen")} activeOpacity={0.6} style={{ justifyContent: "center", alignItems: "center" }}>
          <Foundation name="home" style={{ fontSize: RFPercentage(3.2) }} color="#8E8E93" />
          <Text style={{ marginTop: RFPercentage(0.4), color: "#828282", fontSize: RFPercentage(1.8) }}>בית</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MapScreen")} activeOpacity={0.6} style={{ marginLeft: RFPercentage(5), justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="ios-location-outline" style={{ fontSize: RFPercentage(3.2) }} color="#8E8E93" />
          <Text style={{ marginTop: RFPercentage(0.4), color: "#828282", fontSize: RFPercentage(1.8) }}>מפה</Text>
        </TouchableOpacity>
      </View>

      {/* Right Buttons */}
      <View style={{ width: "45%", position: "absolute", right: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: "center", alignItems: "center" }}>
          <FontAwesome name="user-o" style={{ fontSize: RFPercentage(3) }} color="#8E8E93" />
          <Text style={{ marginTop: RFPercentage(0.8), color: "#828282", fontSize: RFPercentage(1.7) }}>פרופיל</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ marginLeft: RFPercentage(5), justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="settings-outline" style={{ fontSize: RFPercentage(3) }} color="#8E8E93" />
          <Text style={{ marginTop: RFPercentage(0.4), color: "#828282", fontSize: RFPercentage(1.7) }}>הגדרות</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default BottomTab;
