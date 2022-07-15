import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";
import { InvitationCardProps } from "../../utilities/types/sentInvitationsTypes";
import { CardButtons } from "./CardButtons";
import { useCountdown } from "../../context/CountDown";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_HORIZONTAL,
} from "../../utilities/constants/spacing";
import {
  ImportantText,
  NormalText,
  NoteText,
  TitleText,
} from "../../utilities/types/fontTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";

export const InvitationCard = (props: InvitationCardProps) => {
  const {
    invitaion: {
      invitation: { _id, from_id, status, updated_at, to_id },
      patient: { birthDate, gender, name, photo },
      supervisorName,
      supervisorPhoto,
    },

    backgroundColor,
    userRole,
  } = props;

  const { t } = useTranslation();

  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(updated_at).getTime() + sevenDays
  );

  const textColor =
    backgroundColor === colors.darkBlue ? "white" : colors.darkBlue;

  const timeOut = days + hours + minutes + seconds <= 0;
  const unsendable = userRole === "Patient" ? status === "Pending" : true;
  const reinvitable = userRole === "Patient" ? status === "Rejected" : true;
  const showCountDown = !timeOut && status !== "Accepted";
  const age = 15;
  return (
    <View
      key={_id}
      style={{ ...styles.container, backgroundColor: backgroundColor }}
    >
      <View style={styles.content}>
        <View>
          <Text style={{ ...styles.name, color: textColor }}>
            {supervisorName}
          </Text>
          {userRole === "Patient" && (
            <Text style={{ ...styles.status, color: textColor }}>
              {t("sentInvitations.status")}
              <Text style={{ ...NormalText, color: textColor }}>
                {t(`sentInvitations.${status}`)}
              </Text>
            </Text>
          )}

          {userRole === "Supervisor" && (
            <Text style={{ ...styles.status, color: textColor }}>
              {t("RecievedInvitations.gender")}
              <Text style={{ ...NormalText, color: textColor }}>
                {t(`RecievedInvitations.${"male"}`)}
              </Text>
            </Text>
          )}

          {userRole === "Supervisor" && (
            <Text style={{ ...styles.status, color: textColor }}>
              {t("RecievedInvitations.age")}
              <Text style={{ ...NormalText, color: textColor }}>{age}</Text>
            </Text>
          )}
        </View>
        <View style={{ ...styles.circle, borderColor: textColor }}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.image}
          />
        </View>
      </View>
      <CardButtons
        reInvitable={reinvitable}
        unsendable={unsendable}
        timeOut={userRole === "Patient" ? timeOut : true}
        invitationId={_id}
        userRole={userRole}
      />
      {showCountDown && userRole === "Patient" && (
        <Text style={{ ...NoteText, color: textColor, textAlign: "center" }}>
          {t("sentInvitations.resendNote")}
          {t("sentInvitations.time", { days, hours, minutes, seconds })}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: BIG_MARGIN_VERTICAL,
    width: "100%",
    borderRadius: DEVICE_HEIGHT * 0.05,
    padding: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: DEVICE_HEIGHT * 0.05,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  circle: {
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    borderRadius: DEVICE_WIDTH * 0.1,
    borderWidth: DEVICE_WIDTH * 0.01,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  name: {
    ...ImportantText,
    marginBottom: SMALL_MARGIN_HORIZONTAL,
  },
  status: {
    ...TitleText,
  },
});
