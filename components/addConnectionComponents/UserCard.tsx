import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserCardProps } from "../../utilities/types/addConnectionTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { TitleText } from "../../utilities/types/fontTypes";
import colors from "../../utilities/constants/colors";
import { AddUserModal } from "./AddUserModal";

export const UserCard = (props: UserCardProps) => {
  const { name, imageUri, id } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
      <AddUserModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
        imageUri={imageUri}
        id={id}
      />
      <View
        style={{
          width: DEVICE_WIDTH * 0.15,
          height: DEVICE_WIDTH * 0.15,
          borderRadius: DEVICE_WIDTH * 0.8,
          backgroundColor: colors.lightGray,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: { ...TitleText, flex: 1, textAlign: "center", width: "80%" },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
  },
  image: { width: "100%", height: "100%" },
});
