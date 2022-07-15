import React from "react";
import { StyleSheet, Modal, View, ImageBackground } from "react-native";
import colors from "../../utilities/constants/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import { HeadingText } from "../../utilities/types/fontTypes";

export const ModalBase = (props: {
  children: React.ReactNode;
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}) => {
  const { modalVisible, setModalVisible, children } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ImageBackground
            source={require("../../assets/images/Union.png")}
            style={styles.background}
            resizeMode="stretch"
          >
            <View
              style={{
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {children}
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  background: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "10%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: DEVICE_WIDTH * 0.08,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
});
