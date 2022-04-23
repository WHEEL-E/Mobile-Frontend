import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileId from "../components/profileComponents/ProfileId";
import { ProfileProps } from "../utilities/navigationUtils/mainNavigationUtils";
import EditableInputField from "../components/inputs/EditableInputField";

const ProfileScreen = (props: ProfileProps) => {
  const [inputVal, setInputVal] = useState("Hello Person!");

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
