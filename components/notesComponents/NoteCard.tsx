import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../utilities/constants/colors";
import NoteModal from "./NoteModal";
import { removeNote } from "../../store/actions/notes";
import {
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { ImportantText, NormalText } from "../../utilities/types/fontTypes";
import { NoteCardProps } from "../../utilities/types/notesTypes";

const NoteCard = (props: NoteCardProps) => {
  const { id, title, description, backgroundColor } = props;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const deleteNoteHandler = () => {
    dispatch(removeNote(id));
  };

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <NoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        noteId={id}
        noteDescription={description}
        noteTitle={title}
      />
      <TouchableOpacity onPress={deleteNoteHandler} style={styles.close}>
        <Ionicons name="ios-close" color={textColor} size={25} />
      </TouchableOpacity>
      <Text style={{ ...ImportantText, color: textColor }}>{title}</Text>
      <Text style={{ ...NormalText, color: textColor }}>{description}</Text>
      <Ionicons
        name="ios-create"
        color={textColor}
        size={30}
        style={styles.edit}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    marginVertical: SMALL_MARGIN_VERTICAL,
    padding: PADDING_VERTICAL,
    overflow: "hidden",
    width: DEVICE_WIDTH * 0.8,
  },
  close: {
    alignItems: "flex-end",
  },
  edit: {
    marginVertical: SMALL_MARGIN_VERTICAL,
  },
});

export default NoteCard;
