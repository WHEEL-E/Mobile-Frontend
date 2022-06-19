import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import {
  getReturnValues,
  InvitationCardProps,
} from "../../utilities/types/sentInvitationsTypes";
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
import { CardButtons } from "./CardButtons";
import { useCountdown } from "../../context/CountDown";

export const InvitationCard = (props: InvitationCardProps) => {
  const {
    invitaion: { _id, to_Name, status, updated_at, to_id, to_ProfilePhoto },
    backgroundColor,
  } = props;

  const [days, hours, minutes, seconds] = useCountdown(updated_at);

  const textColor =
    backgroundColor === colors.darkBlue ? "white" : colors.darkBlue;

  const timeOut = days + hours + minutes + seconds <= 0;
  const unsendable = status === "Pending";
  const reinvitable = status !== "Accepted";
  const showCountDown = !timeOut && status !== "Accepted";

  return (
    <View
      key={_id}
      style={{ ...styles.container, backgroundColor: backgroundColor }}
    >
      <View style={styles.content}>
        <View>
          <Text style={{ ...styles.name, color: textColor }}>{to_Name}</Text>
          <Text style={{ ...styles.status, color: textColor }}>
            Status:{" "}
            <Text style={{ ...NormalText, color: textColor }}>{status}</Text>
          </Text>
        </View>
        <View style={{ ...styles.circle, borderColor: textColor }}>
          <Image source={{ uri: to_ProfilePhoto }} style={styles.image} />
        </View>
      </View>
      <CardButtons
        reInvitable={reinvitable}
        unsendable={unsendable}
        timeOut={timeOut}
        invitationId={_id}
      />
      {showCountDown && (
        <Text style={{ ...NoteText, color: textColor, textAlign: "center" }}>
          You can resend invitation in:{" "}
          {`${days}d, ${hours}h, ${minutes}m, ${seconds}s`}
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
