import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileId from "../components/UI/ProfileId";
import { ProfileProps } from "../navigation/navigationUtils";

const ProfileScreen = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <ProfileId
        imgSource={require("../assets/IdPlaceHolder.png")}
        name="Regina phalange"
      />
      <Text style={styles.title}>Profile Screen</Text>
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
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
});

export default ProfileScreen;
