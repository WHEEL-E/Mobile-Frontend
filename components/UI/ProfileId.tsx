import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../constants/colors";

interface profileIdProps {
  imgSource: ImageSourcePropType;
  name: string;
}

const ProfileId = (props: profileIdProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          testID="profileIdImage"
          style={styles.image}
          source={props.imgSource}
        />
      </View>
      <Text testID="profileIdName" style={styles.name}>
        {props.name}
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
    backgroundColor: "red",
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