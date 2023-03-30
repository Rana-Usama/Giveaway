import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
//components
import Screen from "./../components/Screen";
import BottomTab from "../components/common/BottomTab";

//config
import Colors from "../config/Colors";

function HomeScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* Nav */}
      <View style={{ marginTop: RFPercentage(2), width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
        <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={require("../../assets/Images/profile.png")} />
        <View
          style={{
            width: RFPercentage(34),
            height: RFPercentage(5.5),
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(10),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: RFPercentage(3),
          }}
        >
          <View style={{ width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Image style={{ width: RFPercentage(2.2), height: RFPercentage(2.2), position: "absolute", left: 0 }} source={require("../../assets/Images/search.png")} />
            <TextInput textAlign="right" style={{ width: "100%" }} placeholder="מה לחפש לך?" placeholderTextColor={"#3F8D79"} />
          </View>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(5), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignSelf: "center" }}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("SelectionScreen")}>
          <Ionicons name="chevron-back-outline" style={{ fontSize: RFPercentage(3) }} color="black" />
        </TouchableOpacity>
        <Text style={{ marginLeft: RFPercentage(0.6), color: Colors.darkOrange, fontSize: RFPercentage(2.2) }}>צפה בהכל</Text>

        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("ProductsScreen")} style={{ position: "absolute", right: 0 }}>
          <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.2) }}>קטגוריות</Text>
        </TouchableOpacity>
      </View>

      {/* Carts */}
      <View style={{ marginTop: RFPercentage(5.2), width: "89%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ borderRadius: RFPercentage(2), width: RFPercentage(14), height: RFPercentage(14), backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/c1.png")} />
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>ציוד רפואי</Text>
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+102</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ borderRadius: RFPercentage(2), width: RFPercentage(14), height: RFPercentage(14), backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={{ width: RFPercentage(8.9), height: RFPercentage(5.8) }} source={require("../../assets/Images/c3.png")} />
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>בעלי חיים</Text>
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+159</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ borderRadius: RFPercentage(2), width: RFPercentage(14), height: RFPercentage(14), backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={{ width: RFPercentage(9), height: RFPercentage(6) }} source={require("../../assets/Images/c2.png")} />
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>ריהוט</Text>
          <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+2156</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab */}
      <View style={{ width: "100%", position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            right: RFPercentage(1),
            top: RFPercentage(3.4),
            backgroundColor: "#188142",
            width: RFPercentage(8),
            height: RFPercentage(8),
            borderRadius: RFPercentage(30),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require("../../assets/Images/plus.png")} />
        </TouchableOpacity>
        <BottomTab />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
});

export default HomeScreen;
