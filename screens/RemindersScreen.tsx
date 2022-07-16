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
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { ImportantText } from "../utilities/types/fontTypes";

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
        patientName={receiver!}
      />
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.background}
      >
        <DataStatus>
          <RemindersList enableEdit={enableEdit} receiver={receiver} />
          {enableEdit && (
            <SquareButton
              title={t("remindersScreen.addReminder")}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => setModalVisible(true)}
            />
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
    flex: 1,
    width: "100%",
  },
  background: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    paddingBottom: "20%",
    paddingTop: "35%",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderColor: "white",
    borderRadius: DEVICE_WIDTH * 0.1,
    width: "90%",
    marginVertical: "5%",
    height: DEVICE_HEIGHT * 0.07,
  },
  titleStyle: {
    ...ImportantText,
    color: "white",
  },
});
