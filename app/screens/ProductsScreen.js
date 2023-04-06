import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//components
import Screen from "./../components/Screen";
import BottomTab from "../components/common/BottomTab";

//config
import Colors from "../config/Colors";

function ProductsScreen(props) {
  const [active, setActive] = useState("1");

  const [serveas, setserveas] = useState("");

  const iconComponent = () => {
    return <MaterialCommunityIcons name={"chevron-down"} size={20} color={Colors.green} />;
  };

  return (
    <Screen style={styles.screen}>
      {/* Nav */}
      <View style={{ marginTop: RFPercentage(2), width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.6} style={{ position: "absolute", left: 0 }} onPress={() => props.navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" style={{ fontSize: RFPercentage(3) }} color="black" />
        </TouchableOpacity>
        <View
          style={{
            width: RFPercentage(35),
            height: RFPercentage(5.5),
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(10),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Image style={{ width: RFPercentage(2.2), height: RFPercentage(2.2), position: "absolute", left: 0 }} source={require("../../assets/Images/search.png")} />
            <TextInput textAlign="right" style={{ width: "100%" }} placeholder="מה לחפש לך?" placeholderTextColor={"#3F8D79"} />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("SignInScreen")} style={{ flexDirection: "row", position: "absolute", right: 0 }}>
          <AntDesign name="logout" style={{ fontSize: RFPercentage(2.7), marginLeft: RFPercentage(1) }} color={Colors.darkOrange} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: RFPercentage(6), width: "90%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ position: "absolute", left: 0, color: Colors.primary, fontSize: RFPercentage(2.2) }}>תבחר מיקום</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: RFPercentage(27),
            height: RFPercentage(5),
            borderRadius: RFPercentage(1.5),
            borderColor: Colors.darkOrange,
            borderWidth: RFPercentage(0.1),
            position: "absolute",
            right: 0,
          }}
        >
          <View style={{ width: "90%" }}>
            <RNPickerSelect
              onValueChange={(value) => setserveas(value)}
              placeholder={{ label: "מקום" }}
              Icon={Platform.OS == "android" ? null : iconComponent}
              items={[
                { label: "New York Street", value: "New York Street" },
                { label: "Bridge 2 New York", value: "Bridge 2 New York" },
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, width: "100%", marginTop: RFPercentage(5) }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
          {/* Carts */}
          <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontFamily: "VarelaRound_400Regular" }}>קטגוריות</Text>
          </View>

          {/* Product Carts */}
          {/* First */}
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: RFPercentage(3),
              width: "90%",
              height: RFPercentage(30),
              backgroundColor: Colors.white,
              borderRadius: RFPercentage(3),
            }}
          >
            <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>כ-2,368</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("DetailsPageScreen")} style={{ position: "absolute", right: 0 }}>
                <Image style={{ width: RFPercentage(26), height: RFPercentage(16) }} source={require("../../assets/Images/p1.png")} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(10), width: "70%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>במצב מעולה</Text>
              <View style={{ width: RFPercentage(0.2), height: RFPercentage(3), backgroundColor: "#E5E5E5" }} />
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>36 ערים</Text>
              <View style={{ width: RFPercentage(0.2), height: RFPercentage(3), backgroundColor: "#E5E5E5" }} />
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>מיידי</Text>
            </View>

            <View style={{ marginTop: RFPercentage(2), width: "70%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: RFPercentage(15), height: RFPercentage(6), backgroundColor: Colors.green, borderRadius: RFPercentage(1.5), justifyContent: "center", alignItems: "center" }}
              >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontFamily: "VarelaRound_400Regular" }}>לצפיה</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginLeft: RFPercentage(2),
                  width: RFPercentage(15),
                  height: RFPercentage(6),
                  backgroundColor: Colors.white,
                  borderColor: Colors.darkOrange,
                  borderWidth: RFPercentage(0.1),
                  borderRadius: RFPercentage(1.5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: Colors.green, fontSize: RFPercentage(2), fontFamily: "VarelaRound_400Regular" }}>הוספת פריט</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: RFPercentage(3), width: "90%", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontFamily: "VarelaRound_400Regular" }}>ריהוט למשרד</Text>
          </View>
          {/* Second */}
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: RFPercentage(3),
              width: "90%",
              height: RFPercentage(30),
              backgroundColor: Colors.white,
              borderRadius: RFPercentage(3),
            }}
          >
            <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>כ-2,368</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("DetailsPageScreen")} style={{ position: "absolute", right: RFPercentage(-4) }}>
                <Image style={{ width: RFPercentage(26), height: RFPercentage(16) }} source={require("../../assets/Images/p2.png")} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(10), width: "70%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>במצב מעולה</Text>
              <View style={{ width: RFPercentage(0.2), height: RFPercentage(3), backgroundColor: "#E5E5E5" }} />
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>36 ערים</Text>
              <View style={{ width: RFPercentage(0.2), height: RFPercentage(3), backgroundColor: "#E5E5E5" }} />
              <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>מיידי</Text>
            </View>

            <View style={{ marginTop: RFPercentage(2), width: "70%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: RFPercentage(15), height: RFPercentage(6), backgroundColor: Colors.green, borderRadius: RFPercentage(1.5), justifyContent: "center", alignItems: "center" }}
              >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontFamily: "VarelaRound_400Regular" }}>לצפיה</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginLeft: RFPercentage(2),
                  width: RFPercentage(15),
                  height: RFPercentage(6),
                  backgroundColor: Colors.white,
                  borderColor: Colors.darkOrange,
                  borderWidth: RFPercentage(0.1),
                  borderRadius: RFPercentage(1.5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: Colors.green, fontSize: RFPercentage(2), fontFamily: "VarelaRound_400Regular" }}>הוספת פריט</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: RFPercentage(20) }} />
      </ScrollView>

      {/* Bottom Tab */}
      <View style={{ width: "100%", position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("AddProductScreen")}
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

export default ProductsScreen;
