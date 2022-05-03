import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";
import RoundEdgedButton from "../buttons/RoundEdgedButton";
import colors from "../../utilities/constants/colors";
import PickerComponent from "./Picker";
import { RenderInputComponent } from "./RenderInputComponent";
import { ImagePickerComponent } from "./ImagePicker";
import {
  signUpMainFormValues,
  signUpMainFormProps,
  submitSignUpMainForm,
} from "../../utilities/types/signUpTypes";
import {
  validateMail,
  validateNotEmpty,
  validatePassword,
  validatePhone,
} from "../../utilities/dataValidators";

const SignUpMainForm = (
  props: InjectedFormProps<signUpMainFormValues, signUpMainFormProps>
) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const [type, setType] = React.useState("patient");
  const typeLabels = ["select", "supervisor", "patient"];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Field
          name="name"
          component={RenderInputComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
        <Field
          name="emailAddress"
          component={RenderInputComponent}
          validate={validateMail}
          warn={validateMail}
        />
        <Field
          name="password"
          component={RenderInputComponent}
          validate={validatePassword}
          warn={validatePassword}
        />
        <Field
          name="address"
          component={RenderInputComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
        <Field
          name="phoneNumber"
          component={RenderInputComponent}
          validate={validatePhone}
          warn={validatePhone}
        />
        <Field
          name="profilePhoto"
          component={ImagePickerComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
        <Field
          name="type"
          component={(props: WrappedFieldProps) => (
            <PickerComponent
              fieldProps={props}
              setType={setType}
              labels={typeLabels}
            />
          )}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
      </ScrollView>
      <RoundEdgedButton
        title={
          type === "supervisor"
            ? t("signUpScreen.signUp")
            : t("signUpScreen.next")
        }
        onPress={handleSubmit(submitSignUpMainForm)}
        backgroundColor={colors.darkGreen}
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
});

const Form = reduxForm<signUpMainFormValues, signUpMainFormProps>({
  form: "SignUpMainForm",
})(SignUpMainForm);

export default Form;
