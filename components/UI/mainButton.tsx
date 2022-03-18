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
  titleStyle: object;
  onPress: () => void;
  icon: { name: any; size: number; color: string };
  image: { url: any };
  hasIcon: boolean;
}

const MainButton = (props: MainButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress, icon, image } = props;
  let TouchCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }

  if (props.hasIcon) {
    return (
      <TouchCmp style={{ ...buttonStyle, ...styles.button }} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Ionicons name={icon.name} size={icon.size} color={icon.color} />
        </View>
        <Text style={titleStyle}>{title}</Text>
      </TouchCmp>
    );
  }
  return (
    <TouchCmp style={{ ...buttonStyle, ...styles.button }} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={image.url}
          style={{ ...styles.image, ...image.imageStyle }}
        />
      </View>
      <Text style={titleStyle}>{title}</Text>
    </TouchCmp>
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
    width: 43,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
