import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { SettingProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { useTranslation } from "react-i18next";
import {
  BIG_MARGIN_HORIZONTAL,
  PADDING_HORIZONTAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";
import { SignOutModal } from "../components/settingsComponents/SignOutModal";
import { MainButton } from "../components/buttons/MainButton";
import { FlatList } from "react-native-gesture-handler";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { NormalText } from "../utilities/types/fontTypes";

const SettingScreen = (props: SettingProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = React.useState(false);

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
        setModalVisible(true);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <SignOutModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View style={styles.itemsContainer}>
          {screenItems.map((item) => (
            <TouchableOpacity
              style={styles.Item}
              key={item.name}
              onPress={item.PressingFunction}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={item.icon as any}
                  size={DEVICE_HEIGHT * 0.04}
                  color={colors.darkGreen}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={DEVICE_HEIGHT * 0.04}
                color={colors.darkGrey}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    paddingTop: "35%",
    paddingBottom: "20%",
    alignSelf: "center",
  },
  itemsContainer: {
    alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  Item: {
    paddingVertical: "5%",
    paddingHorizontal: PADDING_HORIZONTAL,
    margin: SMALL_MARGIN_VERTICAL,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    color: colors.lightBlack,
    ...NormalText,
    marginStart: BIG_MARGIN_HORIZONTAL * 4,
  },
});

export default SettingScreen;
