import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileId from "../components/profileComponents/ProfileId";
import { ProfileProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import EditableInputField from "../components/inputs/EditableInputField";
import colors from "../utilities/constants/colors";
import { MainButton } from "../components/buttons/MainButton";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actions/user";
import MainForm from "../components/profileComponents/MainForm";

const ProfileScreen = (props: ProfileProps) => {
  const [inputVal, setInputVal] = useState("Hello Person!");
  const { navigation } = props;
  const dispatch = useDispatch<any>();

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

      <MainForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30%",
    paddingBottom: "25%",
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
