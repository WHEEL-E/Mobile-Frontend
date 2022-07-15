import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utilities/constants/colors";
import { SentInvitationsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { InvitationCard } from "../components/SentInvitationsComponents/InvitationCard";
import { InvitationData } from "../utilities/types/sentInvitationsTypes";
import { getInvitations } from "../store/actions/invitations";
import { RootState } from "../store/reducers/rootReducer";
import { DataStatus } from "../components/generalComponents/DataStatus";
import { NoData } from "../components/generalComponents/NoData";

const SentInvitations = (props: SentInvitationsProps) => {
  const dispatch = useDispatch<any>();

  const invitations: InvitationData[] = useSelector(
    (state: RootState) => state.invitations.invitations
  );

  const userData = useSelector((state: RootState) => state.user.userData);

  const noData = invitations.length === 0;

  React.useEffect(() => {
    dispatch(
      getInvitations({
        userType: userData!.userType,
        userId: userData?.userMainData._id!,
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <DataStatus>
        {noData && <NoData screen="sentInvitations" />}
        {!noData && (
          <FlatList
            data={invitations}
            renderItem={({ item, index }) => (
              <InvitationCard
                invitaion={item}
                backgroundColor={
                  index % 2 == 0 ? colors.darkBlue : colors.lightPurple
                }
                userRole="Patient"
              />
            )}
            style={{ width: "90%" }}
          />
        )}
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
    paddingTop: "35%",
    paddingBottom: "20%",
  },
});

export default SentInvitations;
