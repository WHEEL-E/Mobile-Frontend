import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useTranslation } from "react-i18next";
import { RemindersProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { BackButton } from "../components/buttons/BackButton";
import colors from "../utilities/constants/colors";
import { SquareButton } from "../components/buttons/SquareButton";
import AddNewReminderModal from "../components/reminderComponents/ReminderModal";
import { RemindersList } from "../components/reminderComponents/RemindersList";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { UserTypes } from "../utilities/types/userTypes";

const RemindersScreen = (props: RemindersProps) => {
  const { navigation, route } = props;
  const { receiver, patientId } = route.params;

  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const userType = useSelector(
    (state: RootState) => state.user.userData?.userType
  );

  const enableEdit = userType === UserTypes.SUPERVISOR;

  return (
    <View style={styles.container}>
      <AddNewReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        patientId={patientId}
      />
      <ImageBackground
        source={require("../assets/images/cloud-background.png")}
        style={styles.background}
      >
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t("remindersScreen.reminders")}</Text>
        </View>
        <RemindersList enableEdit={enableEdit} receiver={receiver} />
        {enableEdit && (
          <View style={styles.buttonContainer}>
            <SquareButton
              title={t("remindersScreen.addReminder")}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => setModalVisible(true)}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default RemindersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: "20%",
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
