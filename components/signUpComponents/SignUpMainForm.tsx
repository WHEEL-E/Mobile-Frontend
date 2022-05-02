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
import {
  signUpMainFormValues,
  signUpMainFormProps,
  submitSignUpMainForm,
} from "../../utilities/types/signUpTypes";
import { ImagePickerComponent } from "./ImagePicker";

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
        <Field name="name" component={RenderInputComponent} />
        <Field name="emailAddress" component={RenderInputComponent} />
        <Field name="password" component={RenderInputComponent} />
        <Field name="address" component={RenderInputComponent} />
        <Field name="phoneNumber" component={RenderInputComponent} />
        <Field name="profilePhoto" component={ImagePickerComponent} />
        <Field
          name="type"
          component={(props: WrappedFieldProps) => (
            <PickerComponent
              fieldProps={props}
              setType={setType}
              labels={typeLabels}
            />
          )}
        />
      </ScrollView>
      <RoundEdgedButton
        title={type === "supervisor" ? t("signUp") : t("next")}
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
    backgroundColor: "red",
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
