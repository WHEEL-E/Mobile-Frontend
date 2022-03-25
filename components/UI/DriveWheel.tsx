import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../constants/colors";
import { DEVICE_WIDTH } from "../../constants/dimentions";

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
    borderRadius: DEVICE_WIDTH * 0.45,
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_WIDTH * 0.9,
    backgroundColor: colors.lightPurple,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  linearGradient: {
    borderRadius: DEVICE_WIDTH * 0.4,
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_WIDTH * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  secondLinearGradient: {
    borderRadius: DEVICE_WIDTH * 0.3,
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_WIDTH * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  ThirdLinearGradient: {
    borderRadius: DEVICE_WIDTH * 0.2,
    width: DEVICE_WIDTH * 0.4,
    height: DEVICE_WIDTH * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  fourthLinearGradient: {
    borderRadius: DEVICE_WIDTH * 0.1,
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteDot: {
    borderRadius: DEVICE_WIDTH * 0.0125,
    width: DEVICE_WIDTH * 0.025,
    height: DEVICE_WIDTH * 0.025,
    backgroundColor: "white",
  },
});

export default DriveWheel;
