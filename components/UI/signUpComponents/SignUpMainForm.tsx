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
  signUpMainFormValues,
  signUpMainFormProps,
  submitSignUpMainForm,
} from "../../../utilities/types/signUpTypes";

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

const Form = reduxForm<signUpMainFormValues, signUpMainFormProps>({
  form: "SignUpMainForm",
})(SignUpMainForm);

export default Form;
