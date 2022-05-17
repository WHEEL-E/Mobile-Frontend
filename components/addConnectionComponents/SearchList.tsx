import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { UserCard } from "./UserCard";
import colors from "../../utilities/constants/colors";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";

export const SearchList = () => {
  const results = useSelector(
    (state: RootState) => state.addNewConnectionReducer.data
  );

  const notLoading = !useSelector(
    (state: RootState) => state.addNewConnectionReducer.loading
  );

  return (
    <View style={{ flex: 1 }}>
      {notLoading && (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={results}
          numColumns={2}
          renderItem={(itemData) => {
            return (
              <UserCard
                key={itemData.index}
                name={itemData.item.name}
                imageUri={itemData.item.profilePhoto}
                id={itemData.item.id}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: DEVICE_WIDTH * 0.8,
    backgroundColor: colors.lightPurple,
    borderRadius: 25,
  },
});
