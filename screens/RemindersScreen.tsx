import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useTranslation } from "react-i18next";
import { RemindersProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import colors from "../utilities/constants/colors";
import { SquareButton } from "../components/buttons/SquareButton";
import AddNewReminderModal from "../components/reminderComponents/ReminderModal";
import { RemindersList } from "../components/reminderComponents/RemindersList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { UserTypes } from "../utilities/types/userTypes";
import { DataStatus } from "../components/generalComponents/DataStatus";
import { getReminders } from "../store/actions/reminders";

const RemindersScreen = (props: RemindersProps) => {
  const {
    route: {
      params: { receiver, patientId },
    },
  } = props;

  const dispatch = useDispatch<any>();

  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const userType = useSelector(
    (state: RootState) => state.user.userData?.userType
  );

  const userId = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
  )!;

  const enableEdit = userType === UserTypes.SUPERVISOR;

  React.useEffect(() => {
    dispatch(getReminders(userId));
  }, []);

  return (
    <View style={styles.container}>
      <AddNewReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        patientId={patientId}
        reminderData={{
          title: "",
          description: "",
          due_date: new Date(),
        }}
      />
      <ImageBackground
        source={require("../assets/images/cloud-background.png")}
        style={styles.background}
      >
        <DataStatus>
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
        </DataStatus>
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
    paddingTop: "35%",
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
