import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { WrappedFieldProps } from "redux-form";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../utilities/constants/colors";
import fonts from "../../utilities/constants/fonts";

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
          <Text>{t("signUpScreen.profilePhoto")}</Text>
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
    height: 105,
    marginVertical: 10,
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.lightGray,
    flexDirection: "row",
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.darkGrey,
    borderWidth: 5,
  },
  validationText: {
    color: "red",
    fontFamily: fonts.CairoRegular,
    fontSize: 10,
  },
});
