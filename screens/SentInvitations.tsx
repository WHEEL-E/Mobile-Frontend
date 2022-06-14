import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../utilities/constants/colors";
import { SentInvitationsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { InvitationCard } from "../components/SentInvitationsComponents/InvitationCard";
import { InvitationData } from "../utilities/types/sentInvitationsTypes";

const SentInvitations = (props: SentInvitationsProps) => {
  const invitations: InvitationData[] = [
    {
      id: "456",
      supervisorName: "Ken Adams",
      supervisorId: "123",
      sentAt: new Date("2022-06-10"),
      status: "sent",
      supervisorPhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      id: "789",
      supervisorName: "Ken Adams",
      supervisorId: "123",
      sentAt: new Date("2022-06-13T18:09:00Z"),
      status: "accepted",
      supervisorPhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      id: "101112",
      supervisorName: "Ken Adams",
      supervisorId: "123",
      sentAt: new Date("2022-06-01"),
      status: "rejected",
      supervisorPhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
    {
      id: "121314",
      supervisorName: "Ken Adams",
      supervisorId: "123",
      sentAt: new Date("2022-06-10"),
      status: "rejected",
      supervisorPhoto:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={invitations}
        renderItem={({ item, index }) => (
          <InvitationCard
            invitaion={item}
            backgroundColor={
              index % 2 == 0 ? colors.darkBlue : colors.lightPurple
            }
          />
        )}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "35%",
    paddingBottom: "20%",
  },
});

export default SentInvitations;
