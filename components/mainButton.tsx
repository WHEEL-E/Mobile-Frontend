import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MainButtonProps {
  title: string;
  buttonStyle: object;
  containerStyle: object;
  titleStyle: object;
  onPress: any;
  icon: { name: any; size: number; color: string };
  image: { url: any };
}

const MainButton = (props: MainButtonProps) => {
  const {
    title,
    buttonStyle,
    containerStyle,
    titleStyle,
    onPress,
    icon,
    image,
  } = props;
  // search for a better practice for the type
  let TouchCmp: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }
  //   <Ionicons name={icon.name} size={icon.size} color={icon.color} />
  return (
    <View style={containerStyle}>
      <TouchCmp style={{ ...buttonStyle, ...styles.button }} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={image.url} style={styles.image} />
        </View>
        <Text style={titleStyle}>{title}</Text>
      </TouchCmp>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
