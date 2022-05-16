import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";
import colors from "../../utilities/constants/colors";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import {
  validateMail,
  validateNotEmpty,
  validatePassword,
} from "../../utilities/dataValidators";
import { SignInData, submitLoginForm } from "../../utilities/types/signInTypes";
import { RoundEdgedButton } from "../buttons/RoundEdgedButton";
import PickerComponent from "../signUpComponents/Picker";
import { RenderInputComponent } from "../signUpComponents/RenderInputComponent";

const SignInForm = (props: InjectedFormProps<SignInData>) => {
  const typeLabels = ["supervisor", "patient"];
  const { handleSubmit } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        nestedScrollEnabled={true}
      >
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
          name="type"
          component={(props: WrappedFieldProps) => (
            <PickerComponent fieldProps={props} labels={typeLabels} />
          )}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
      </ScrollView>
      <RoundEdgedButton
        title={t("signInScreen.logIn")}
        onPress={handleSubmit(submitLoginForm)}
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
    paddingVertical: PADDING_VERTICAL,
    flex: 1,
  },
});

const Form = reduxForm<SignInData>({
  form: "SignInform",
})(SignInForm);

export default Form;
