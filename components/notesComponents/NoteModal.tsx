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
import { ModalBase } from "../generalComponents/ModalBase";

const NoteModal = (props: NoteModalProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<any>();

  const { modalVisible, setModalVisible, noteId, noteTitle, noteDescription } =
    props;

  const userId = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
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
          user_id: userId!,
        })
      );
    }
    setNote({ title: "", description: "" });
    return setModalVisible(false);
  };

  return (
    <ModalBase setModalVisible={setModalVisible} modalVisible={modalVisible}>
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
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  descriptionFieldStyle: {
    width: "100%",
    backgroundColor: "white",
    height: DEVICE_HEIGHT * 0.15,
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  titleFieldStyle: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: "5%",
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "9%",
  },
});

export default NoteModal;
