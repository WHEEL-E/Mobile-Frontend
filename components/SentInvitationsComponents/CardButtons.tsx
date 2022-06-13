import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { SquareButton } from "../buttons/SquareButton";
import { CardButtonsProps } from "../../utilities/types/sentInvitationsTypes";
import { NormalText } from "../../utilities/types/fontTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_HORIZONTAL,
} from "../../utilities/constants/spacing";

export const CardButtons = (props: CardButtonsProps) => {
  const { reInvitable, unsendable, timeOut } = props;

  return (
    <View
      style={{
        ...styles.buttonsList,
        height: unsendable || reInvitable ? DEVICE_HEIGHT * 0.06 : 0,
      }}
    >
      {unsendable && (
        <SquareButton
          title="Unsend"
          titleStyle={styles.buttonTitleStyle}
          onPress={() => {}}
          buttonStyle={styles.cancelButton}
        />
      )}
      {reInvitable && (
        <SquareButton
          title="Reinvite"
          titleStyle={{
            ...styles.buttonTitleStyle,
            color: timeOut ? "white" : "black",
          }}
          onPress={() => {}}
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
