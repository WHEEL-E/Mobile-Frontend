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
    userInfo: { _id, name, profile_picture, address },
  } = props;

  const [modalVisible, setModalVisible] = React.useState(false);

  const { t } = useTranslation();

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  const userType = useSelector(
    (state: RootState) => state.user.userData?.userType
  )!;

  const viewHandler = () => {
    navigation.navigate("SupervisedPatient", { patientId: _id });
  };

  const removeHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <RemoveUserModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        name={name}
        id={_id}
      />
      <View style={styles.cardContent}>
        <View>
          <Text style={{ ...styles.title, color: textColor }}>{name}</Text>
          <Text style={{ ...styles.location, color: textColor }}>
            {address}
          </Text>
        </View>
        <View style={{ ...styles.circle, borderColor: textColor }}>
          {profile_picture !== "" && (
            <Image source={{ uri: profile_picture }} style={styles.image} />
          )}
          {profile_picture === "" && (
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.image}
            />
          )}
        </View>
      </View>
      {userType === UserTypes.SUPERVISOR && (
        <SquareButton
          title={t("associatedUsers.view")}
          titleStyle={styles.buttonTitleStyle}
          onPress={viewHandler}
          buttonStyle={styles.viewButton}
        />
      )}
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
  viewButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: "20%",
    marginLeft: BIG_MARGIN_HORIZONTAL,
    marginVertical: "5%",
    padding: "2%",
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
});
