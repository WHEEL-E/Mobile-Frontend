import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { ErrorModal } from "../ErrorHandlingComponents/ErrorModal";
import { Loading } from "./LoadingData";

export const DataStatus = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const isLoading = useSelector(
    (state: RootState) => state.dataStatus.isLoading
  );

  return (
    <View style={styles.container}>
      <ErrorModal />
      {isLoading && <Loading />}
      {isLoading === false && children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
