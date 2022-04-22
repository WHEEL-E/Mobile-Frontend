import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NewsProps } from "../navigation/navigationUtils";
import { SquareButton } from "../components/buttons/SquareButton";

const NotificationsScreen = (props: NewsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Screen</Text>
      <SquareButton
        title="Notes"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
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
  button: {
    backgroundColor: "#11698E",
    width: 300,
    marginHorizontal: 50,
    marginVertical: 10,
    height: 50,
  },
  buttonTitle: {
    fontFamily: "Cairo-Regular",
    color: "white",
    fontSize: 20,
  },
});

export default NotificationsScreen;
