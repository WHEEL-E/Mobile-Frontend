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
import {
  SignInData,
  SignInFormProps,
  submitLoginForm,
} from "../../utilities/types/signInTypes";
import { UserTypes } from "../../utilities/types/userTypes";
import { RoundEdgedButton } from "../buttons/RoundEdgedButton";
import PickerComponent from "../formComponents/Picker";
import { RenderInputComponent } from "../formComponents/RenderInputComponent";

const SignInForm = (props: InjectedFormProps<SignInData, SignInFormProps>) => {
  const typeLabels = [UserTypes.PATIENT, UserTypes.SUPERVISOR];
  const { handleSubmit } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
      <View
        style={{ width: "90%", justifyContent: "center", alignSelf: "center" }}
      >
        <RoundEdgedButton
          title={t("signInScreen.logIn")}
          onPress={handleSubmit(submitLoginForm)}
          backgroundColor={colors.darkGreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: PADDING_VERTICAL,
  },
});

const Form = reduxForm<SignInData, SignInFormProps>({
  form: "SignInform",
})(SignInForm);

export default Form;
