import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  BIG_MARGIN_VERTICAL,
  PADDING_HORIZONTAL,
} from "../../utilities/constants/spacing";
import { ScreenNameText } from "../../utilities/types/fontTypes";

export const BaseScreen = (props: {
  title: string;
  children: React.ReactNode;
}) => {
  const { title, children } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/cloud-background.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-b-app.png")}
        />
        <Text style={styles.title}>{title}</Text>
        <Image
          source={require("../../assets/images/forgot-password-ICON.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: "7%",
          }}
        >
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "35%",
    paddingBottom: "20%",
  },
  logo: {
    height: 50,
    resizeMode: "center",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    ...ScreenNameText,
    marginVertical: BIG_MARGIN_VERTICAL,
  },
  image: {
    flex: 1,
    marginVertical: BIG_MARGIN_VERTICAL,
  },
});
