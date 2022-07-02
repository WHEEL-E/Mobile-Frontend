import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NewsProps } from "../utilities/types/navigationTypes/tabNavigationTypes";
import { NotificationsList } from "../components/NotificationsComponents/NotificationsList";

const NotificationsScreen = (props: NewsProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <NotificationsList />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40%",
    paddingBottom: "20%",
  },
});

export default NotificationsScreen;
