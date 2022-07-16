import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { profileIdProps } from "../../utilities/types/componentsTypes";
import colors from "../../utilities/constants/colors";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { TitleText } from "../../utilities/types/fontTypes";

const ProfileId = (props: profileIdProps) => {
  const { imgSource, name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          testID="profileIdImage"
          style={styles.image}
          source={require("../../assets/images/avatar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    top: 10,
    alignItems: "center",
  },
  circle: {
    width: DEVICE_WIDTH * 0.3,
    height: DEVICE_WIDTH * 0.3,
    borderRadius: DEVICE_WIDTH * 0.15,
    borderColor: colors.lightGray,
    borderWidth: 5,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: DEVICE_WIDTH * 0.15,
  },
  name: {
    ...TitleText,
  },
});

export default ProfileId;
