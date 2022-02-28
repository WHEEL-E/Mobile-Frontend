import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes Screen</Text>
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
