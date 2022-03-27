import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../constants/colors";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const DriveWheel = () => {
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["#000000", "#494949", "#000000"]}
        style={styles.linearGradient}
      >
        <TouchableOpacity style={styles.arrow}>
          <Ionicons name="chevron-up-outline" color="white" size={30} />
        </TouchableOpacity>
        <View style={styles.sideArrowsContainer}>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="chevron-back-outline" color="white" size={30} />
          </TouchableOpacity>
          <LinearGradient
            colors={["#000000", "#000000", "#949494"]}
            style={styles.secondLinearGradient}
          >
            <LinearGradient
              colors={["#949494", "#000000", "#000000"]}
              style={styles.ThirdLinearGradient}
            >
              <LinearGradient
                colors={["#949494", "#000000", "#000000", "#949494"]}
                style={styles.fourthLinearGradient}
              >
                <View style={styles.whiteDot} />
              </LinearGradient>
            </LinearGradient>
          </LinearGradient>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.arrow}>
          <Ionicons name="chevron-down-outline" color="white" size={30} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    alignSelf: "center",
  },
  sideArrowsContainer: {
    flexDirection: "row",
  },
  background: {
    borderRadius: SCREEN_WIDTH * 0.45,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
    backgroundColor: colors.lightPurple,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  linearGradient: {
    borderRadius: SCREEN_WIDTH * 0.4,
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  secondLinearGradient: {
    borderRadius: SCREEN_WIDTH * 0.3,
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  ThirdLinearGradient: {
    borderRadius: SCREEN_WIDTH * 0.2,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  fourthLinearGradient: {
    borderRadius: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteDot: {
    borderRadius: SCREEN_WIDTH * 0.0125,
    width: SCREEN_WIDTH * 0.025,
    height: SCREEN_WIDTH * 0.025,
    backgroundColor: "white",
  },
});

export default DriveWheel;
