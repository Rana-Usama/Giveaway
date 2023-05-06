import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView, Button, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";

//components
import Screen from "./../components/Screen";
import InputField from "./../components/common/InputField";
import MyAppButton from "../components/common/MyAppButton";

//config
import Colors from "../config/Colors";

function AddProductScreen(props) {
  const [serveas, setserveas] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Input fields
  const [inputField, SetInputField] = useState([
    {
      placeholder: "שם המוצר",
      value: "",
    },
    {
      placeholder: "מחיר",
      value: "",
    },
    {
      placeholder: "עיר/מדינה/מיקוד",
      value: "",
    },
    {
      placeholder: "תיאור מודעה",
      placeholderAtStart: true,
      height: RFPercentage(20),
      multiLine: true,
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const iconComponent = () => {
    return <MaterialCommunityIcons name={"chevron-down"} size={20} color={Colors.green} />;
  };

  // Image Picker
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
        {/* Back */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.goBack()} style={{ position: "absolute", left: 0 }}>
          <LinearGradient
            colors={["#38EF7D", "#11998E"]}
            start={[1, 1]}
            end={[0.5, 0.1]}
            style={{ justifyContent: "center", alignItems: "center", width: RFPercentage(4), height: RFPercentage(4), borderRadius: RFPercentage(30) }}
          >
            <Ionicons name="chevron-back-outline" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.3) }}>הוסף מוצר</Text>
      </View>

      <View style={{ marginTop: RFPercentage(6), width: "90%", justifyContent: "center", alignItems: "flex-start" }}>
        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: "bold" }}>פרטי מודעה:</Text>
      </View>

      {/* Input Fields */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1, width: "100%" }}>
        <ScrollView style={{ flex: 1, width: "100%", marginTop: RFPercentage(1) }}>
          <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
            <View
              style={{
                borderColor: Colors.green,
                height: RFPercentage(7),
                borderWidth: RFPercentage(0.2),
                borderRadius: RFPercentage(2),
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: RFPercentage(3),
              }}
            >
              <View style={{ width: "90%" }}>
                <RNPickerSelect
                  onValueChange={(value) => setserveas(value)}
                  placeholder={{ label: "סוג המוצר" }}
                  Icon={Platform.OS == "android" ? null : iconComponent}
                  items={[
                    { label: "Furniture Office", value: "Furniture Office" },
                    { label: "House Furniture", value: "House Furniture" },
                    { label: "Tables", value: "Tables" },
                    { label: "Laptopes", value: "Laptopes" },
                    { label: "Mobiles", value: "Mobiles" },
                  ]}
                />
              </View>
            </View>

            <View
              style={{
                borderColor: Colors.green,
                height: RFPercentage(7),
                borderWidth: RFPercentage(0.2),
                borderRadius: RFPercentage(2),
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: RFPercentage(3),
              }}
            >
              <View style={{ width: "90%" }}>
                <RNPickerSelect
                  onValueChange={(value) => setserveas(value)}
                  placeholder={{ label: "בחר את המיקום שלך" }}
                  Icon={Platform.OS == "android" ? null : iconComponent}
                  items={[
                    { label: "New York Street", value: "New York Street" },
                    { label: "Bridge 2 New York", value: "Bridge 2 New York" },
                  ]}
                />
              </View>
            </View>

            {/* Input field */}
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
              {inputField.map((item, i) => (
                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(2) }}>
                  <InputField
                    placeholder={item.placeholder}
                    placeholderColor={"#475569"}
                    height={item.height}
                    backgroundColor={"#EFEFEF"}
                    secure={item.secure}
                    multiline={item.multiLine}
                    borderRadius={RFPercentage(2)}
                    color={Colors.black}
                    fontSize={RFPercentage(2)}
                    handleFeild={(text) => handleChange(text, i)}
                    value={item.value}
                    width={"92%"}
                  />
                </View>
              ))}
            </View>

            <View style={{ marginTop: RFPercentage(6), width: "88%", justifyContent: "center", alignItems: "flex-end" }}>
              <Text style={{ color: Colors.darkOrange, fontSize: RFPercentage(2.1) }}>הוספת תמונות:</Text>
            </View>

            {/* Image Picker */}
            <TouchableOpacity
              onPress={pickImage}
              activeOpacity={0.6}
              style={{
                width: "88%",
                alignItems: "center",
                justifyContent: "center",
                borderColor: Colors.green,
                borderWidth: RFPercentage(0.2),
                marginTop: RFPercentage(3),
                borderRadius: RFPercentage(2),
                height: RFPercentage(30),
                overflow: "hidden",
              }}
            >
              {image ? (
                <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />
              ) : (
                <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/add.png")} />
              )}
            </TouchableOpacity>

            {/* Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: RFPercentage(6),
                width: "70%",
                height: RFPercentage(8),
                backgroundColor: "#4F8472",
                borderRadius: RFPercentage(2),
              }}
            >
              <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/heart.png")} />
              <Text style={{ marginLeft: RFPercentage(1), color: Colors.white, fontSize: RFPercentage(2.4), fontFamily: "VarelaRound_400Regular" }}>מוסר.ת מכל ה-</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: RFPercentage(4) }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

export default AddProductScreen;
