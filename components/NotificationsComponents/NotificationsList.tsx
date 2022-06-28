import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Data from "../../data/notificationsDummyData.json";
import { NotificationCard } from "./NotificationCard";
import {
  NotificationData,
  NotificationType,
} from "../../utilities/types/NotificationsTypes";

export const NotificationsList = (props: any) => {
  const userNotifications: NotificationData[] = Data.data.map((data) => {
    const notificationType = data.type as keyof typeof NotificationType;
    return { ...data, type: NotificationType[notificationType] };
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "90%" }}
        data={userNotifications}
        renderItem={({ item, index }) => {
          return <NotificationCard notificationData={item} key={item._id} />;
        }}
      />
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
