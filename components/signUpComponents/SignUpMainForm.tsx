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
import PickerComponent from "../formComponents/Picker";
import { RenderInputComponent } from "../formComponents/RenderInputComponent";
import { ImagePickerComponent } from "./ImagePicker";
import {
  SignUpMainFormValues,
  SignUpMainFormProps,
} from "../../utilities/types/signUpTypes";
import { submitSignUpMainForm } from "../../utilities/signUpUtils";
import {
  validateMail,
  validateNotEmpty,
  validatePassword,
  validatePhone,
} from "../../utilities/dataValidators";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { UserTypes } from "../../utilities/types/userTypes";

const SignUpMainForm = (
  props: InjectedFormProps<
    SignUpMainFormValues & { type: UserTypes },
    SignUpMainFormProps
  >
) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const [type, setType] = React.useState(UserTypes.PATIENT);

  const genderLabels = ["male", "female"];
  const typeLabels = [UserTypes.SUPERVISOR, UserTypes.PATIENT];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        nestedScrollEnabled={true}
      >
        <Field
          name="name"
          component={RenderInputComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
        <Field
          name="email"
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
          name="phone"
          component={RenderInputComponent}
          validate={validatePhone}
          warn={validatePhone}
        />
        <Field name="profile_picture" component={ImagePickerComponent} />
        <Field
          name="gender"
          component={(props: WrappedFieldProps) => (
            <PickerComponent fieldProps={props} labels={genderLabels} />
          )}
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
      <View style={{ width: "100%", paddingHorizontal: "5%" }}>
        <RoundEdgedButton
          title={
            type === UserTypes.SUPERVISOR
              ? t("signUpScreen.signUp")
              : t("signUpScreen.next")
          }
          onPress={handleSubmit(submitSignUpMainForm)}
          backgroundColor={colors.darkGreen}
        />
      </View>
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
  },
});

const Form = reduxForm<
  SignUpMainFormValues & { type: UserTypes },
  SignUpMainFormProps
>({
  form: "SignUpMainForm",
})(SignUpMainForm);

export default Form;
