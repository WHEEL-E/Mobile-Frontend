import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { GetStartedProps } from "../navigation/navigationUtils";
import RoundEdgedButton from "../components/UI/RoundEdgedButton";
import colors from "../constants/colors";

const GetStartedScreen = (props: GetStartedProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Cover.jpg")} style={styles.cover} />
      </View>
      <Text style={styles.title}>Wheel.e gets you everywhere</Text>
      <Text style={styles.slogan}>
        Hundrends of users depend on wheel.e to move around freely!{" "}
      </Text>
      <View>
        <RoundEdgedButton
          title="Get Started"
          buttonStyle={styles.buttonStyle}
          titleStyle={{
            fontFamily: "Cairo-Bold",
            color: "white",
            fontSize: 20,
          }}
          onPress={() => props.navigation.navigate("SignIn")}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Not a member? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={{ color: colors.darkGreen }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

GetStartedScreen.navigationOptions = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
};
/*
        <Button
          title="Get stated"
          onPress={() => props.navigation.navigate("SignIn")}
        ></Button>

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    fontFamily: "Cairo-Bold",
  },
  buttons: {
    margin: 10,
    width: 200,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 5,
    height: 100,
  },
  cover: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: Platform.OS === "android" ? "75%" : "70%",
    alignItems: "center",
  },
  slogan: {
    fontFamily: "Cairo-Light",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});

export default GetStartedScreen;
