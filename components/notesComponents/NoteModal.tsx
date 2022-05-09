import React from "react";
import { StyleSheet, Modal, Text, View, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SquareButton } from "../buttons/SquareButton";
import InputField from "../inputs/InputField";
import colors from "../../utilities/constants/colors";
import { addNote, updateNote } from "../../store/actions/notes";
import { NormalText, TitleText } from "../../utilities/types/fontTypes";
import { RootState } from "../../store/reducers/rootReducer";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { NoteModalProps } from "../../utilities/types/notesTypes";

const NoteModal = (props: NoteModalProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<any>();

  const { modalVisible, setModalVisible, noteId, noteTitle, noteDescription } =
    props;

  const userId = useSelector(
    (state: RootState) => state.user.userData?.mainData.userId
  );

  const [note, setNote] = React.useState({
    title: noteTitle,
    description: noteDescription,
  });

  const editTitleHandler = (title: string) => {
    setNote({ ...note, title: title });
  };

  const editdescriptionHandler = (body: string) => {
    setNote({ ...note, description: body });
  };

  const submitHandler = () => {
    if (noteId) {
      dispatch(updateNote({ ...note, id: noteId }));
    } else {
      dispatch(
        addNote({
          title: note.title,
          description: note.description,
          userId: userId!,
        })
      );
    }
    setNote({ title: "", description: "" });
    return setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalView}>
        <ImageBackground
          source={require("../../assets/images/Union.png")}
          style={styles.background}
        >
          <Text style={styles.modalTitle}>{t("notesScreen.modalHeader")}</Text>
          <InputField
            placeHolder={t("notesScreen.enterTitle")}
            value={note.title}
            onChangeText={editTitleHandler}
            fieldStyle={styles.titleFieldStyle}
            autoComplete="off"
          />
          <InputField
            placeHolder={t("notesScreen.enterDescription")}
            value={note.description}
            fieldStyle={styles.descriptionFieldStyle}
            onChangeText={editdescriptionHandler}
            autoComplete="off"
          />
          <View style={styles.buttonsList}>
            <SquareButton
              title={t("notesScreen.cancel")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => setModalVisible(false)}
              buttonStyle={styles.cancelButton}
            />
            <SquareButton
              title={t("notesScreen.submit")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => submitHandler()}
              buttonStyle={styles.sendButton}
            />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: BIG_MARGIN_VERTICAL,
  },
  descriptionFieldStyle: {
    width: "80%",
    flex: 1,
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  titleFieldStyle: {
    width: "80%",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
  background: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "10%",
  },
  modalView: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: "50%",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    height: 50,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: 50,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    paddingHorizontal: "10%",
  },
});

export default NoteModal;
