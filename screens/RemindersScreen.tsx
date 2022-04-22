import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { RemindersProps } from "../utilities/navigationUtils/mainNavigationUtils";
import { BackButton } from "../components/buttons/BackButton";
import colors from "../utilities/constants/colors";
import { SquareButton } from "../components/buttons/SquareButton";
import AddNewReminderModal from "../components/reminderComponents/ReminderModal";
import { RemindersList } from "../components/reminderComponents/RemindersList";

const SupervisorRemindersScreen = (props: RemindersProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AddNewReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ImageBackground
        source={require("../assets/images/cloud-background.png")}
        style={styles.background}
      >
        <View style={styles.backButton}>
          <BackButton onPress={() => props.navigation.goBack()} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Reminders</Text>
        </View>
        <RemindersList />
        <View style={styles.buttonContainer}>
          <SquareButton
            title="Add a reminder"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SupervisorRemindersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  titleContainer: {
    alignItems: "center",
  },
  background: { width: "100%", height: "100%" },
  backButton: {
    marginTop: "10%",
    marginLeft: "10%",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 5,
    height: 70,
  },
  titleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
