import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";
import RoundEdgedButton from "../RoundEdgedButton";
import colors from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import { DEVICE_HEIGHT } from "../../../constants/dimentions";
import PickerComponent from "./Picker";
import { RenderInputComponent } from "./RenderInputComponent";
import {
  SignUpAdditionalDataValues,
  SignUpAdditionalDataProps,
  submitSignUpAdditionalData,
} from "../../../utilities/types/signUpTypes";

const SignUpAdditionalData = (
  props: InjectedFormProps<
    SignUpAdditionalDataValues,
    SignUpAdditionalDataProps
  >
) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const genderLabels = ["gender", "male", "female"];
  const smokeLabels = ["do you smoke?", "yes", "no"];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Field name="height" component={RenderInputComponent} />
        <Field name="weight" component={RenderInputComponent} />
        <Field name="age" component={RenderInputComponent} />
        <Field
          name="gender"
          component={(props: WrappedFieldProps) => (
            <PickerComponent fieldProps={props} labels={genderLabels} />
          )}
        />
        <Field
          name="smoke"
          component={(props: WrappedFieldProps) => (
            <PickerComponent fieldProps={props} labels={smokeLabels} />
          )}
        />
      </ScrollView>
      <RoundEdgedButton
        title={t("signUp")}
        onPress={handleSubmit(submitSignUpAdditionalData)}
        buttonStyle={styles.signUpButton}
        titleStyle={styles.signUpText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  signUpButton: {
    width: "80%",
    backgroundColor: colors.darkGreen,
    borderRadius: 60,
    height: "12%",
    marginVertical: 5,
    alignSelf: "center",
  },
  signUpText: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontFamily: fonts.CairoBold,
    color: "white",
  },
});

const Form = reduxForm<SignUpAdditionalDataValues, SignUpAdditionalDataProps>({
  form: "SignUpAdditionalData",
})(SignUpAdditionalData);

export default Form;
