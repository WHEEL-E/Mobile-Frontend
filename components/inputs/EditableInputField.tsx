import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { EditableInputFieldProps } from "../../utilities/types/componentsTypes";
import colors from "../../utilities/constants/colors";

const EditableInputField = (props: EditableInputFieldProps) => {
  const { placeHolder, fieldStyle, autoComplete, value, onChangeText, onSave } =
    props;
  const [atEditing, setAtEditing] = useState(false);
  return (
    <View style={styles.container}>
      {atEditing ? (
        <TextInput
          placeholder={placeHolder}
          style={{ ...styles.input, ...fieldStyle }}
          autoComplete={autoComplete}
          value={value}
          onChangeText={onChangeText}
          onBlur={onSave}
          autoFocus
        />
      ) : (
        <Text style={styles.input}>{value}</Text>
      )}
      <TouchableOpacity
        onPress={() => setAtEditing(true)}
        style={styles.button}
      >
        <Ionicons name="ios-create-outline" color={"#fff"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default EditableInputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    width: 300,
    backgroundColor: colors.lightGray,
    textAlign: "center",
    borderRadius: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    textAlign: "center",
    borderRadius: 55,
    backgroundColor: colors.darkGreen,
    margin: 10,
    paddingLeft: 3,
  },
  input: {
    borderRadius: 15,
    textAlign: "left",
    padding: 20,
    width: 250,
  },
});
