import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileId from "../components/profileComponents/ProfileId";
import { ProfileProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import EditableInputField from "../components/inputs/EditableInputField";
import colors from "../utilities/constants/colors";
import { MainButton } from "../components/buttons/MainButton";
import { useAuth } from "../context/AuthContext";

const ProfileScreen = (props: ProfileProps) => {
  const [inputVal, setInputVal] = useState("Hello Person!");
  const { navigation } = props;
  const { signOut } = useAuth();

  const textHandler = (val: string) => {
    setInputVal(val);
  };

  const saveHandler = () => {
    // hit the db for saving or updating
    return;
  };

  return (
    <View style={styles.container}>
      <ProfileId
        imgSource={require("../assets/images/IdPlaceHolder.png")}
        name="Regina phalange"
      />
      <Text style={styles.title}>Profile Screen</Text>

      <EditableInputField
        placeHolder=""
        autoComplete="off"
        fieldStyle={{}}
        value={inputVal}
        onChangeText={textHandler}
        onSave={saveHandler}
      />

      <MainButton
        title="Change language"
        buttonStyle={{
          ...styles.button,
          backgroundColor: colors.darkGreen,
        }}
        titleStyle={styles.ButtonText}
        onPress={() => navigation.navigate("ChangeLanguage")}
        icon={{ name: "globe-outline", size: 40, color: "black" }}
      />
      <MainButton
        title="SignOut"
        buttonStyle={{
          ...styles.button,
          backgroundColor: colors.lightBrown,
        }}
        titleStyle={styles.ButtonText}
        onPress={signOut}
        icon={{ name: "log-out-outline", size: 40, color: "black" }}
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
  buttons: {
    marginBottom: 70,
    width: 300,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 150,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  ButtonText: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ProfileScreen;
