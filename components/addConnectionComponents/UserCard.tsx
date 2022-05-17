import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserCardProps } from "../../utilities/types/addNewConnectionTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { TitleText } from "../../utilities/types/fontTypes";
import colors from "../../utilities/constants/colors";

export const UserCard = (props: UserCardProps) => {
  const { name, imageUri } = props;

  return (
    <View style={styles.card}>
      <View
        style={{
          width: DEVICE_WIDTH * 0.15,
          height: DEVICE_WIDTH * 0.15,
          borderRadius: DEVICE_WIDTH * 0.8,
          backgroundColor: colors.lightGray,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="airplane" size={DEVICE_WIDTH * 0.1} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: TitleText,
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
  },
});
