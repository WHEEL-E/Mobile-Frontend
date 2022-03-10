import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GetStartedProps } from "../navigation/navigationUtils";
import RoundEdgedButton from "../components/UI/RoundEdgedButton";
import colors from "../constants/colors";

const GetStartedScreen = (props: GetStartedProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started screen</Text>
      <View style={styles.buttons}>
        <RoundEdgedButton
          title="SIGN UP"
          buttonStyle={{
            backgroundColor: colors.lightGreen,
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
            outerHeight: 100,
          }}
          titleStyle={{
            fontFamily: "Cairo-Bold",
            color: "white",
            fontSize: 20,
          }}
          onPress={() => props.navigation.navigate("SignUp")}
        />
        <RoundEdgedButton
          title="SIGN IN"
          buttonStyle={{
            backgroundColor: colors.lightGreen,
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            fontFamily: "Cairo-Bold",
            color: "white",
            fontSize: 20,
          }}
          onPress={() => props.navigation.navigate("SignIn")}
        />
      </View>
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
  buttons: {
    margin: 10,
    width: 200,
    alignItems: "center",
  },
});

export default GetStartedScreen;
