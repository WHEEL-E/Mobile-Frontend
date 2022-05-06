import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SettingProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

const SettingScreen = (props: SettingProps) => {
  const { navigation } = props;
  const { signOut } = useAuth();

  const screenItems = [
    {
      name: "Account",
      icon: "person",
      PressingFunction: () => {
        navigation.navigate("Profile");
      },
    },
    {
      name: "Sound",
      icon: "volume-high",
      PressingFunction: () => {
        navigation.navigate("SoundSettings");
      },
    },
    {
      name: "Language",
      icon: "earth",
      PressingFunction: () => {
        navigation.navigate("ChangeLanguage");
      },
    },
    {
      name: "Logout",
      icon: "person",
      PressingFunction: () => {
        signOut();
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {screenItems.map((item) => (
          <View style={styles.Item}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name={item.icon as any}
                size={20}
                color={colors.darkGreen}
              />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={colors.darkGrey}
              onPress={item.PressingFunction}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 120,
  },
  itemsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  Item: {
    padding: 5,
    margin: 5,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#3f414e",
    fontFamily: fonts.CairoRegular,
    fontSize: 14,
    marginStart: 18,
  },
});

export default SettingScreen;
