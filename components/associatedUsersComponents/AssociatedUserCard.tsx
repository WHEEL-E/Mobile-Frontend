import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import colors from "../../utilities/constants/colors";
import { AssociatedUserProps } from "../../utilities/types/componentsTypes";
import { RootState } from "../../store/reducers/rootReducer";
import { UserTypes } from "../../utilities/types/userTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { SquareButton } from "../buttons/SquareButton";
import { ImportantText, NormalText } from "../../utilities/types/fontTypes";
import { RemoveUserModal } from "./RemoveUserModal";
import {
  BIG_MARGIN_HORIZONTAL,
  BIG_MARGIN_VERTICAL,
  PADDING_VERTICAL,
} from "../../utilities/constants/spacing";

export const AssociatedUserCard = (props: AssociatedUserProps) => {
  const {
    navigation,
    backgroundColor,
    userInfo: { userId, userName, profilePhoto, address },
  } = props;

  const [modalVisible, setModalVisible] = React.useState(false);

  const { t } = useTranslation();

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  const userType = useSelector(
    (state: RootState) => state.user.userData?.userType
  )!;

  const viewHandler = () => {
    navigation.navigate("SupervisedPatient", { patientId: userId });
  };

  const removeHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <RemoveUserModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        name={userName}
        id={userId}
      />
      <View style={styles.cardContent}>
        <View>
          <Text style={{ ...styles.title, color: textColor }}>{userName}</Text>
          <Text style={{ ...styles.location, color: textColor }}>
            {address}
          </Text>
        </View>
        <View style={{ ...styles.circle, borderColor: textColor }}>
          <Image source={{ uri: profilePhoto }} style={styles.image} />
        </View>
      </View>
      <View style={styles.buttonsList}>
        <SquareButton
          title={t("associatedUsers.remove")}
          titleStyle={styles.buttonTitleStyle}
          onPress={removeHandler}
          buttonStyle={styles.removeButton}
        />
        {userType === UserTypes.SUPERVISOR && (
          <SquareButton
            title={t("associatedUsers.view")}
            titleStyle={styles.buttonTitleStyle}
            onPress={viewHandler}
            buttonStyle={styles.viewButton}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: DEVICE_WIDTH * 0.02 },
    shadowRadius: DEVICE_WIDTH * 0.1,
    elevation: 5,
    borderRadius: DEVICE_WIDTH * 0.1,
    margin: BIG_MARGIN_VERTICAL,
    padding: PADDING_VERTICAL,
    overflow: "hidden",
    width: "100%",
  },
  cardContent: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  title: {
    ...ImportantText,
    textAlign: "center",
  },
  location: {
    ...NormalText,
    textAlign: "center",
  },
  circle: {
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    borderRadius: DEVICE_WIDTH * 0.1,
    borderWidth: 5,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  removeButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    paddingVertical: "3%",
    marginRight: BIG_MARGIN_HORIZONTAL,
  },
  viewButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    marginLeft: BIG_MARGIN_HORIZONTAL,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: BIG_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
});
