import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NotesProps } from "../utilities/types/navigationTypes/tabNavigationTypes";
import colors from "../utilities/constants/colors";
import NoteCard from "../components/notesComponents/NoteCard";
import { SquareButton } from "../components/buttons/SquareButton";
import NoteModal from "../components/notesComponents/NoteModal";
import { useTranslation } from "react-i18next";
import { SMALL_MARGIN_VERTICAL } from "../utilities/constants/spacing";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { getNotes } from "../store/actions/notes";

const NotesScreen = (props: NotesProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const notes = useSelector((state: RootState) => state.notes.allNotes);

  const userId = useSelector(
    (state: RootState) => state.user.userData?.userMainData.userId
  );

  const backgroundColors = [colors.darkGreen, colors.lightPurple];
  let colorIndex = 0;

  React.useEffect(() => {
    dispatch(getNotes(userId!));
  }, [dispatch, getNotes]);

  return (
    <View style={styles.container}>
      <NoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        noteTitle=""
        noteDescription=""
      />
      <FlatList
        data={notes}
        keyExtractor={(info) => info.id!}
        numColumns={2}
        renderItem={(info) => {
          if (info.index % 2 == 1) {
            colorIndex = 1 - colorIndex;
          }
          return (
            <NoteCard
              id={info.item.id!}
              description={info.item.description}
              title={info.item.title}
              backgroundColor={backgroundColors[colorIndex]}
              key={info.item.id}
            />
          );
        }}
      />

      <SquareButton
        title={t("notesScreen.addNote")}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: "20%",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: "80%",
    marginVertical: SMALL_MARGIN_VERTICAL,
    height: 70,
  },
  titleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
  },
});

export default NotesScreen;
