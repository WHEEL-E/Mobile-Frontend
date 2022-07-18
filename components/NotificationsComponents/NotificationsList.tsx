import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NotificationCard } from "./NotificationCard";
import { NotificationData } from "../../utilities/types/notificationsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { NoData } from "../generalComponents/NoData";

export const NotificationsList = (props: any) => {
  const userNotifications: NotificationData[] = useSelector(
    (state: RootState) => state.notifications.allNotifications
  );

  const noData = userNotifications.length == 0;

  return (
    <View style={styles.container}>
      {noData && <NoData screen="notification" />}
      {!noData && (
        <FlatList
          style={{ width: "90%" }}
          data={userNotifications}
          renderItem={({ item, index }) => {
            return <NotificationCard notificationData={item} key={item._id} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
