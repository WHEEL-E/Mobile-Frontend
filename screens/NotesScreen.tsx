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
import { DataStatus } from "../components/generalComponents/DataStatus";
import { NoData } from "../components/generalComponents/NoData";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { TitleText } from "../utilities/types/fontTypes";

const NotesScreen = (props: NotesProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const notes = useSelector((state: RootState) => state.notes.allNotes);

  const userId = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
  );

  const backgroundColors = [
    colors.darkGreen,
    colors.darkGreen,
    colors.lightPurple,
    colors.lightPurple,
  ];
  let colorIndex = 0;

  const noData = notes.length == 0;

  React.useEffect(() => {
    dispatch(getNotes(userId!));
  }, [dispatch, getNotes]);

  return (
    <View style={styles.container}>
      <DataStatus>
        <NoteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          noteTitle=""
          noteDescription=""
        />
        {noData && <NoData screen="notes" />}
        {!noData && (
          <FlatList
            data={notes}
            keyExtractor={(info) => info._id!}
            numColumns={2}
            renderItem={(info) => (
              <NoteCard
                id={info.item._id!}
                description={info.item.description}
                title={info.item.title}
                backgroundColor={
                  info.index === 0
                    ? colors.lightPurple
                    : backgroundColors[(info.index - 1) % 4]
                }
                key={info.item._id}
              />
            )}
          />
        )}

        <SquareButton
          title={t("notesScreen.addNote")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={() => setModalVisible(true)}
        />
      </DataStatus>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: "30%",
    paddingBottom: "20%",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderColor: "white",
    borderRadius: DEVICE_WIDTH * 0.1,
    width: "80%",
    marginVertical: SMALL_MARGIN_VERTICAL,
    height: DEVICE_HEIGHT * 0.07,
  },
  titleStyle: {
    color: "white",
    ...TitleText,
  },
});

export default NotesScreen;
