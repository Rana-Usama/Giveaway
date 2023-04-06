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
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result.uri);
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

            <View style={{ marginTop: RFPercentage(6), width: "88%", justifyContent: "center", alignItems: "flex-start" }}>
              <Text style={{ color: Colors.darkOrange, fontSize: RFPercentage(2.1) }}>Upload from Gallery by clicking on the box!</Text>
            </View>

            {/* Image Picker */}
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: "88%",
                alignItems: "center",
                justifyContent: "center",
                borderColor: Colors.green,
                borderWidth: RFPercentage(0.1),
                marginTop: RFPercentage(3),
                borderRadius: RFPercentage(2),
                height: RFPercentage(30),
              }}
            >
              {selectedImage && <Image source={{ uri: selectedImage }} style={{ borderRadius: RFPercentage(2), width: "100%", height: RFPercentage(30) }} />}
            </TouchableOpacity>

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
              <MyAppButton
                title="Publish Product"
                onPress={() => props.navigation.navigate("SelectionScreen")}
                padding={RFPercentage(1.8)}
                backgroundColor={Colors.green}
                borderColor={Colors.white}
                borderWidth={RFPercentage(0.2)}
                color={Colors.white}
                bold={false}
                fontSize={RFPercentage(2)}
                fontFamily={"VarelaRound_400Regular"}
                borderRadius={RFPercentage(20)}
                width={"80%"}
              />
            </View>

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
