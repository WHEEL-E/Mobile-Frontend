import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../store/actions/notifications";
import colors from "../../utilities/constants/colors";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import {
  NormalText,
  NoteText,
  TitleText,
} from "../../utilities/types/fontTypes";
import {
  NotificationCardProps,
  NotificationColors,
} from "../../utilities/types/notificationsTypes";

export const NotificationCard = (props: NotificationCardProps) => {
  const {
    notificationData: { _id, updated_at, description, title, type },
  } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const deleteHandler = () => {
    dispatch(removeNotification(_id));
  };

  const backgroundColor = NotificationColors.get(type);

  const textColor =
    backgroundColor === colors.lightPurple ? colors.darkBlue : "white";

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
      }}
    >
      <TouchableOpacity onPress={deleteHandler} style={styles.close}>
        <Ionicons name="ios-close" color={textColor} size={25} />
      </TouchableOpacity>
      <Text style={{ ...styles.title, color: textColor }}>
        {t(`notifications.${title}`)}
      </Text>
      <Text style={{ ...styles.description, color: textColor }}>
        {t(`notifications.${description}`)}
      </Text>
      <Text style={{ ...styles.date, color: textColor }}>
        {t("notifications.receivedAt")}
        {new Date(updated_at).toLocaleDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: BIG_MARGIN_VERTICAL,
    borderRadius: DEVICE_HEIGHT * 0.01,
    padding: "5%",
  },
  title: {
    ...TitleText,
    color: "white",
    textAlign: "center",
  },
  description: {
    ...NormalText,
    color: "white",
    lineHeight: DEVICE_HEIGHT * 0.03,
    marginVertical: SMALL_MARGIN_VERTICAL,
    textAlign: "center",
  },
  date: {
    ...NoteText,
    textAlign: "right",
    width: "100%",
    color: "white",
  },
  close: {
    width: "100%",
    alignItems: "flex-end",
  },
});
