import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { AssociatedUserCard } from "../components/associatedUsersComponents/AssociatedUserCard";
import colors from "../utilities/constants/colors";
import { AssociatedPatientsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const AssociatedUsersScreen = (props: AssociatedPatientsProps) => {
  const { navigation } = props;

  const associatedUsers = [
    {
      userId: "id",
      userName: "Emelia Erheart",
      address: "Atlantic ocean",
      profilePhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      userId: "id",
      userName: "Emelia Erheart",
      address: "Atlantic ocean",
      profilePhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      userId: "id",
      userName: "Emelia Erheart",
      address: "Atlantic ocean",
      profilePhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      userId: "id",
      userName: "Emelia Erheart",
      address: "Atlantic ocean",
      profilePhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        resizeMode="cover"
        style={styles.content}
      >
        <FlatList
          data={associatedUsers}
          renderItem={({ item, index }) => (
            <AssociatedUserCard
              userInfo={item}
              backgroundColor={
                index % 2 == 0 ? colors.darkGreen : colors.lightPurple
              }
              navigation={navigation}
              key={item.userId}
            />
          )}
          style={styles.list}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50%",
    paddingBottom: "20%",
    paddingHorizontal: "5%",
  },
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});

export default AssociatedUsersScreen;
