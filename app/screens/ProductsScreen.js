import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
//components
import Screen from "./../components/Screen";
import BottomTab from "../components/common/BottomTab";

//config
import Colors from "../config/Colors";

function ProductsScreen(props) {
  const [active, setActive] = useState("1");

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
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" style={{ fontSize: RFPercentage(3) }} color="black" />
        </TouchableOpacity>
        <Text style={{ marginLeft: RFPercentage(0.6), color: Colors.darkOrange, fontSize: RFPercentage(2.2) }}>צפה בהכל</Text>
        <Text style={{ position: "absolute", right: 0, color: Colors.primary, fontSize: RFPercentage(3.2) }}>קטגוריות</Text>
      </View>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
          {/* Carts */}
          <View style={{ left: RFPercentage(1), marginTop: RFPercentage(3), width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => setActive("1")}
                activeOpacity={0.6}
                style={{
                  borderWidth: active == "1" ? RFPercentage(0.2) : 0,
                  borderColor: active == "1" ? Colors.green : null,
                  borderRadius: RFPercentage(2),
                  width: RFPercentage(14),
                  height: RFPercentage(14),
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/c1.png")} />
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>ציוד רפואי</Text>
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+102</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActive("2")}
                activeOpacity={0.6}
                style={{
                  borderWidth: active == "2" ? RFPercentage(0.2) : 0,
                  borderColor: active == "2" ? Colors.green : null,
                  marginLeft: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  width: RFPercentage(14),
                  height: RFPercentage(14),
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image style={{ width: RFPercentage(8.9), height: RFPercentage(5.8) }} source={require("../../assets/Images/c3.png")} />
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>בעלי חיים</Text>
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+159</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActive("3")}
                activeOpacity={0.6}
                style={{
                  borderWidth: active == "3" ? RFPercentage(0.2) : 0,
                  borderColor: active == "3" ? Colors.green : null,
                  marginLeft: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  width: RFPercentage(14),
                  height: RFPercentage(14),
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image style={{ width: RFPercentage(9), height: RFPercentage(6) }} source={require("../../assets/Images/c2.png")} />
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>ריהוט</Text>
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+2156</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActive("4")}
                activeOpacity={0.6}
                style={{
                  borderWidth: active == "4" ? RFPercentage(0.2) : 0,
                  borderColor: active == "4" ? Colors.green : null,
                  marginLeft: RFPercentage(2),
                  borderRadius: RFPercentage(2),
                  width: RFPercentage(14),
                  height: RFPercentage(14),
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/c1.png")} />
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.darkOrange, fontSize: RFPercentage(2) }}>ריהוט</Text>
                <Text style={{ marginTop: RFPercentage(0.8), color: Colors.green, fontSize: RFPercentage(2) }}>+2156</Text>
              </TouchableOpacity>
              <View style={{ marginLeft: RFPercentage(1) }} />
            </ScrollView>
          </View>

          <View style={{ marginTop: RFPercentage(3), width: "90%", justifyContent: "flex-start", alignItems: "flex-start" }}>
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
              <Image style={{ width: RFPercentage(26), height: RFPercentage(16), position: "absolute", right: 0 }} source={require("../../assets/Images/p1.png")} />
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
              <Image style={{ width: RFPercentage(26), height: RFPercentage(16), position: "absolute", right: RFPercentage(-3) }} source={require("../../assets/Images/p2.png")} />
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
