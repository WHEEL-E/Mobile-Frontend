import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { WrappedFieldProps } from "redux-form";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";
import {
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { NormalText, NoteText } from "../../utilities/types/fontTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";

export const ImagePickerComponent = (props: WrappedFieldProps) => {
  const { input, meta } = props;
  const { onChange, value, name } = input;
  const { t } = useTranslation();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      onChange(result.uri);
    }
  };

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <View style={styles.buttonView}>
          <Text style={{ ...NormalText }}>
            {t("signUpScreen.profilePhoto")}
          </Text>
          {value !== "" && (
            <Image source={{ uri: value }} style={styles.image} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.validationText}>
        {meta.invalid && t(meta.warning, { name: t(`signUpScreen.${name}`) })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "80%",
    height: DEVICE_HEIGHT * 0.15,
    marginVertical: SMALL_MARGIN_VERTICAL,
    borderRadius: 15,
    padding: PADDING_VERTICAL,
    backgroundColor: colors.lightGray,
  },
  buttonView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: DEVICE_HEIGHT * 0.1,
    height: DEVICE_HEIGHT * 0.1,
    borderRadius: DEVICE_HEIGHT * 0.05,
    borderColor: colors.darkGrey,
    borderWidth: DEVICE_WIDTH * 0.005,
  },
  validationText: {
    color: "red",
    ...NoteText,
  },
});
