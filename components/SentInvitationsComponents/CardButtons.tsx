import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";
import { SquareButton } from "../buttons/SquareButton";
import { CardButtonsProps } from "../../utilities/types/sentInvitationsTypes";
import { NormalText } from "../../utilities/types/fontTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_HORIZONTAL,
} from "../../utilities/constants/spacing";
import { useDispatch } from "react-redux";
import {
  acceptInvitation,
  rejectInvitation,
  resendInvitation,
  unsendInvitation,
} from "../../store/actions/invitations";
import { sendNotification } from "../../store/actions/notifications";
import {
  NotificationDescriptions,
  NotificationType,
} from "../../utilities/types/notificationsTypes";
import { UserTypes } from "../../utilities/types/userTypes";

export const CardButtons = (props: CardButtonsProps) => {
  const {
    reInvitable,
    unsendable,
    timeOut,
    invitationId,
    userRole,
    to_id,
    from_id,
  } = props;
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const rejectHandler = () => {
    dispatch(rejectInvitation(invitationId));
    dispatch(
      sendNotification({
        title: NotificationType.CONNECTIONS,
        user_id: from_id,
        description: NotificationDescriptions.REJECTED_CONNECTION,
        type: NotificationType.CONNECTIONS,
        userRole: UserTypes.PATIENT,
      })
    );
  };

  const acceptHandler = () => {
    dispatch(acceptInvitation(invitationId));
    dispatch(
      sendNotification({
        title: NotificationType.CONNECTIONS,
        user_id: from_id,
        description: NotificationDescriptions.ACCEPTED_CONNECTION,
        type: NotificationType.CONNECTIONS,
        userRole: UserTypes.PATIENT,
      })
    );
  };

  const inviteHandler = () => {
    dispatch(resendInvitation(invitationId));
    dispatch(
      sendNotification({
        title: NotificationType.CONNECTIONS,
        user_id: to_id,
        description: NotificationDescriptions.RECEIVED_CONNECTION,
        type: NotificationType.CONNECTIONS,
        userRole: UserTypes.PATIENT,
      })
    );
  };

  return (
    <View
      style={{
        ...styles.buttonsList,
        height: unsendable || reInvitable ? DEVICE_HEIGHT * 0.06 : 0,
      }}
    >
      {unsendable && (
        <SquareButton
          title={
            userRole === "Patient"
              ? t("sentInvitations.unsend")
              : t("RecievedInvitations.reject")
          }
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {
            userRole === "Patient"
              ? dispatch(unsendInvitation(invitationId))
              : rejectHandler();
          }}
          buttonStyle={styles.cancelButton}
        />
      )}

      {reInvitable && (
        <SquareButton
          title={
            userRole === "Patient"
              ? t("sentInvitations.reinvite")
              : t("RecievedInvitations.accept")
          }
          titleStyle={{
            ...styles.buttonTitleStyle,
            color: timeOut ? "white" : "black",
          }}
          onPress={() => {
            userRole === "Patient" ? inviteHandler() : acceptHandler();
          }}
          buttonStyle={{
            ...styles.sendButton,
            backgroundColor: timeOut ? colors.lightGreen : colors.lightGray,
          }}
          disabled={!timeOut}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    marginHorizontal: SMALL_MARGIN_HORIZONTAL,
  },
  sendButton: {
    flex: 1,
    borderColor: colors.darkGreen,
    marginHorizontal: SMALL_MARGIN_HORIZONTAL,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: BIG_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "white",
    textAlign: "center",
  },
});
