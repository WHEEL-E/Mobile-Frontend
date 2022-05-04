import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";
import { RoundEdgedButton } from "../buttons/RoundEdgedButton";
import colors from "../../utilities/constants/colors";
import PickerComponent from "./Picker";
import { RenderInputComponent } from "./RenderInputComponent";
import {
  SignUpAdditionalDataValues,
  SignUpAdditionalDataProps,
  submitSignUpAdditionalData,
} from "../../utilities/types/signUpTypes";

const SignUpAdditionalData = (
  props: InjectedFormProps<
    SignUpAdditionalDataValues,
    SignUpAdditionalDataProps
  >
) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const genderLabels = ["gender", "male", "female"];
  const smokeLabels = ["smoking", "yes", "no"];

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

const Form = reduxForm<SignUpAdditionalDataValues, SignUpAdditionalDataProps>({
  form: "SignUpAdditionalData",
})(SignUpAdditionalData);

export default Form;
