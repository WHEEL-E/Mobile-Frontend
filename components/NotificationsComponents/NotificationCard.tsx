import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
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

  const [translationX, setTranslationX] = React.useState(0);

  const [backgroundColor, setBackgroundColor] = React.useState(
    NotificationColors.get(type)
  );

  const textColor =
    backgroundColor === colors.lightPurple ? colors.darkBlue : "white";

  const move = React.useCallback((speed: number) => {
    deleteHandler();
  }, []);

  const onSwipe = (gestureState: any) => {
    move(gestureState.vx);
    setBackgroundColor(colors.lightGray);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipe}
      onSwipeRight={onSwipe}
      config={config}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        transform: [{ translateX: translationX }],
      }}
    >
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
    </GestureRecognizer>
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
});
