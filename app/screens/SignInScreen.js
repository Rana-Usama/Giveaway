import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import InputField from "./../components/common/InputField";

//components
import Screen from "./../components/Screen";
import MyAppButton from "../components/common/MyAppButton";

//config
import Colors from "../config/Colors";

function SignInScreen(props) {
  // Input fields
  const [indicator, showIndicator] = useState(false);

  const [inputField, SetInputField] = useState([
    {
      placeholder: "אימייל",
      value: "",
    },
    {
      placeholder: "סיסמה",
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    showIndicator(true);
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
      alert("Please fill all the feilds");
      showIndicator(false);
      return true;
    }
    props.navigation.navigate("SelectionScreen");
    try {
      // API INTEGRATION WILL COME HERE
    } catch (error) {
      alert("Error");
    }

    showIndicator(false);
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
          {/* Image */}
          <Image style={{ left: RFPercentage(4), width: RFPercentage(30), height: RFPercentage(26), marginTop: RFPercentage(5) }} source={require("../../assets/Images/bag.png")} />

          {/* Input field */}
          <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
            {inputField.map((item, i) => (
              <View key={i} style={{ marginTop: i == 0 ? RFPercentage(10) : RFPercentage(2) }}>
                <InputField
                  placeholder={item.placeholder}
                  placeholderColor={"#475569"}
                  height={RFPercentage(8)}
                  backgroundColor={"#EFEFEF"}
                  secure={item.secure}
                  borderRadius={RFPercentage(10)}
                  color={Colors.black}
                  fontSize={RFPercentage(2)}
                  handleFeild={(text) => handleChange(text, i)}
                  value={item.value}
                  width={"92%"}
                />
              </View>
            ))}
          </View>

          <View style={{ width: "82%", justifyContent: "flex-start", alignItems: "flex-start", marginTop: RFPercentage(1) }}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={{ fontSize: RFPercentage(2.2), color: "#000113" }}>שכחת?</Text>
            </TouchableOpacity>
          </View>

          {/* Button */}
          <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
            <MyAppButton
              title="התחבר"
              onPress={() => handleLogin()}
              padding={RFPercentage(1.8)}
              backgroundColor={Colors.green}
              borderColor={Colors.white}
              borderWidth={RFPercentage(0.2)}
              color={Colors.white}
              bold={false}
              fontSize={RFPercentage(2.2)}
              fontFamily={"VarelaRound_400Regular"}
              borderRadius={RFPercentage(20)}
              width={"80%"}
            />
          </View>

          {/* Social Media Login */}
          <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(5), width: "90%" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#F1F5F9",
                borderRadius: RFPercentage(30),
                width: RFPercentage(20),
                height: RFPercentage(6),
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image style={{ width: RFPercentage(2.8), height: RFPercentage(2.8) }} source={require("../../assets/Images/google.png")} />
              <Text style={{ color: "#475569", fontSize: RFPercentage(2), marginLeft: RFPercentage(1) }}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F1F5F9",
                borderRadius: RFPercentage(30),
                width: RFPercentage(20),
                height: RFPercentage(6),
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginLeft: RFPercentage(2),
              }}
            >
              <Image style={{ width: RFPercentage(2.8), height: RFPercentage(2.8) }} source={require("../../assets/Images/facebook.png")} />
              <Text style={{ color: "#475569", fontSize: RFPercentage(2), marginLeft: RFPercentage(1) }}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: "#828282", fontSize: RFPercentage(2.2), marginTop: RFPercentage(5) }}>אין לך חשבון עדיין? צור חדש</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: RFPercentage(10) }} />
      </ScrollView>
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

export default SignInScreen;
