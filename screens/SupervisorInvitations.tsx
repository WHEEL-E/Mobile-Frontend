import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { InvitationCard } from "../components/SentInvitationsComponents/InvitationCard";
import colors from "../utilities/constants/colors";
import { InvitationData } from "../utilities/types/sentInvitationsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

export default function SupervisorInvitations() {
  const invitations: InvitationData[] = useSelector(
    (state: RootState) => state.invitations.invitations
  );

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
            userRole="Supervisor"
          />
        )}
        style={{ width: "90%" }}
      />
    </View>
  );
}

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
