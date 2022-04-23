import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { profileIdProps } from "../../utilities/componentsUtils";
import colors from "../../utilities/constants/colors";

const ProfileId = (props: profileIdProps) => {
  const { imgSource, name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          testID="profileIdImage"
          style={styles.image}
          source={imgSource}
        />
      </View>
      <Text testID="profileIdName" style={styles.name}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    top: 10,
    alignItems: "center",
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: colors.lightGray,
    borderWidth: 5,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 75,
  },
  name: {
    fontFamily: "Cairo-Bold",
    fontSize: 35,
  },
});

export default ProfileId;
