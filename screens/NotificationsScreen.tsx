import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NewsProps } from "../utilities/types/navigationTypes/tabNavigationTypes";
import { NotificationsList } from "../components/NotificationsComponents/NotificationsList";
import { DataStatus } from "../components/generalComponents/DataStatus";
import { getNotifications } from "../store/actions/notifications";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import * as Notifications from "expo-notifications";

const NotificationsScreen = (props: NewsProps) => {
  const dispatch = useDispatch<any>();

  const userId = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
  );

  React.useEffect(() => {
    Notifications.getExpoPushTokenAsync().then(({ data }) => console.log(data));

    dispatch(getNotifications(userId!));
  }, [dispatch, getNotifications]);

  return (
    <View style={styles.container}>
      <DataStatus>
        <ImageBackground
          source={require("../assets/images/Vector.png")}
          style={styles.backgroundImage}
          resizeMode="stretch"
        >
          <NotificationsList />
        </ImageBackground>
      </DataStatus>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40%",
    paddingBottom: "20%",
  },
});

export default NotificationsScreen;
