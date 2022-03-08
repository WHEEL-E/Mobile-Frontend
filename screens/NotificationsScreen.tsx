import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NewsProps } from "../navigation/navigationUtils";
import SquareButton from "../components/squareButton";

const NotificationsScreen = (props: NewsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Screen</Text>
      <SquareButton
        title="Notes"
        buttonStyle={{
          backgroundColor: "#11698E",
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
          outerHeight: 100,
        }}
        titleStyle={{
          fontFamily: "Cairo-Regular",
          color: "white",
          fontSize: 20,
        }}
        onPress={() => props.navigation.navigate("Notes")}
      />
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

export default NotificationsScreen;
