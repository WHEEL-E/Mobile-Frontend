import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utilities/constants/colors";
import { AssociatedUserCard } from "../components/associatedUsersComponents/AssociatedUserCard";
import { getAssociatedUsers } from "../store/actions/associatedUsers";
import { RootState } from "../store/reducers/rootReducer";
import { AssociatedPatientsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const AssociatedUsersScreen = (props: AssociatedPatientsProps) => {
  const { navigation } = props;

  const dispatch = useDispatch<any>();

  const associatedUsers = useSelector(
    (state: RootState) => state.associatedUsers.associatedUsers
  );

  const userData = useSelector((state: RootState) => state.user.userData)!;

  React.useEffect(() => {
    dispatch(
      getAssociatedUsers({
        userId: userData?.userMainData._id!,
        userType: userData.userType,
      })
    );
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
    paddingTop: "50%",
    paddingBottom: "20%",
  },
  list: {
    width: "90%",
  },
});

export default AssociatedUsersScreen;
