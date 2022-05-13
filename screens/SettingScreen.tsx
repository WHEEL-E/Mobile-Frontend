import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SettingProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import {
  BIG_MARGIN_HORIZONTAL,
  PADDING_HORIZONTAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";

const SettingScreen = (props: SettingProps) => {
  const { navigation } = props;
  const { signOut } = useAuth();
  const { t } = useTranslation();

  const screenItems = [
    {
      name: t("settings.account"),
      icon: "person",
      PressingFunction: () => {
        navigation.navigate("Profile");
      },
    },
    {
      name: t("settings.sound"),
      icon: "volume-high",
      PressingFunction: () => {
        navigation.navigate("SoundSettings");
      },
    },
    {
      name: t("settings.language"),
      icon: "earth",
      PressingFunction: () => {
        navigation.navigate("ChangeLanguage");
      },
    },
    {
      name: t("settings.logout"),
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
          <View style={styles.Item} key={item.name}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name={item.icon as any}
                size={20}
                color={colors.darkGreen}
              />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
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
    paddingTop: "25%",
  },
  itemsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  Item: {
    padding: PADDING_HORIZONTAL,
    margin: SMALL_MARGIN_VERTICAL,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.lightBlack,
    fontFamily: fonts.CairoRegular,
    fontSize: 14,
    marginStart: BIG_MARGIN_HORIZONTAL * 4,
  },
});

export default SettingScreen;