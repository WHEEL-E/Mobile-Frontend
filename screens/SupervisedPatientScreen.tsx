import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MainButton } from "../components/buttons/MainButton";
import { SquareButton } from "../components/buttons/SquareButton";
import { DataStatus } from "../components/generalComponents/DataStatus";
import { getUserById } from "../store/actions/associatedUsers";
import { RootState } from "../store/reducers/rootReducer";
import colors from "../utilities/constants/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import fonts from "../utilities/constants/fonts";
import { SMALL_MARGIN_VERTICAL } from "../utilities/constants/spacing";
import { HeadingText, TitleText } from "../utilities/types/fontTypes";
import { SupervisedPatientProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { User, UserTypes } from "../utilities/types/userTypes";

const SupervisedPatientScreen = (props: SupervisedPatientProps) => {
  const { navigation, route } = props;
  const { t } = useTranslation();

  const patientId = route.params.patientId;

  const dispatch = useDispatch<any>();
  let tempData: User = {
    userMainData: {
      _id: "",
      name: "",
      email: "",
      associatedUsers: [],
      gender: "female",
      profile_picture: "",
      phone: 0,
    },
    userType: UserTypes.PATIENT,
  };

  const patient =
    useSelector((state: RootState) => state.associatedUsers.associatedUser) ||
    tempData;

  React.useEffect(() => {
    dispatch(getUserById({ userId: patientId, userType: UserTypes.PATIENT }));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Union.png")}
        style={styles.backgroundImage}
      >
        <DataStatus>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo-b-app.png")}
          />
          <View style={styles.patientCard}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/images/avatar.png")}
              />
            </View>
            <Text style={styles.patientName}>{patient.userMainData.name}</Text>
          </View>
          <View style={styles.buttons}>
            <MainButton
              title={t("supervisedPatientScreen.map")}
              image={{ url: require("../assets/images/map.png") }}
              onPress={() => {
                navigation.navigate("Map");
              }}
              buttonStyle={styles.mapButton}
              titleStyle={styles.buttonsTitle}
            />
            <View style={styles.smallButtonsContainer}>
              <MainButton
                title={t("supervisedPatientScreen.reminders")}
                onPress={() => {
                  navigation.navigate("Reminders", {
                    patientId: patient.userMainData._id,
                    receiver: patient.userMainData.name,
                  });
                }}
                buttonStyle={styles.remindersButton}
                titleStyle={styles.buttonsTitle}
                image={{ url: require("../assets/images/health-state.png") }}
              />
            </View>
            <MainButton
              title={t("supervisedPatientScreen.healthInfo")}
              image={{ url: require("../assets/images/hospital.png") }}
              onPress={() => {
                navigation.navigate("HealthMonitoring");
              }}
              buttonStyle={styles.healthButton}
              titleStyle={styles.buttonsTitle}
            />
          </View>
        </DataStatus>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",
    paddingTop: "20%",
    paddingBottom: "10%",
    paddingHorizontal: "5%",
  },
  backButton: {
    position: "absolute",
    top: "7%",
    left: "8%",
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 75,
  },
  patientCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    height: DEVICE_HEIGHT * 0.1,
  },
  logo: {
    height: "5%",
    marginBottom: "10%",
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  patientName: {
    ...HeadingText,
  },
  buttons: {
    flex: 1,
    paddingBottom: "15%",
  },
  mapButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  remindersButton: {
    alignItems: "center",
    backgroundColor: colors.lightGreen,
    borderRadius: DEVICE_WIDTH * 0.04,
    flex: 1,
    margin: SMALL_MARGIN_VERTICAL,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  profileButton: {
    backgroundColor: colors.lightPurple,
    borderRadius: 20,
    flex: 1,
    margin: 5,
  },
  healthButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  smallButtonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonsTitle: {
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_HEIGHT * 0.02,
    color: "white",
  },
});

export default SupervisedPatientScreen;
