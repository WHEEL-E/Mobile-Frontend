import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NotesProps } from "../navigation/navigationUtils";
// Tested temporarly, feel free to delete it after the merge of this PR
import AssociatedPatientCard from "../components/associatedPatientCard";
import colors from "../constants/colors";

const NotesScreen = (props: NotesProps) => {
  // comes dynamically from the db
  const patientName = "Emelia Erheart";
  const location = "Atlantic ocean";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes Screen</Text>
      <AssociatedPatientCard
        onPress={() => props.navigation.navigate("SignIn")}
        patientName={patientName}
        backgroundColor={colors.lightGray}
        patientAddress={location}
      />
      <AssociatedPatientCard
        onPress={() => props.navigation.navigate("SignIn")}
        patientName={patientName}
        backgroundColor={colors.darkGreen}
        patientAddress={location}
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

export default NotesScreen;
