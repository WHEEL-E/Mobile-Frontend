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
import {
  SignUpAdditionalDataValues,
  SignUpAdditionalDataProps,
} from "../../utilities/types/signUpTypes";
import { submitSignUpAdditionalData } from "../../utilities/signUpUtils";
import {
  validateDate,
  validateNotEmpty,
  validatePhone,
  validateThreeDigitNum,
} from "../../utilities/dataValidators";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { FormDate } from "../formComponents/FormDate";

const SignUpAdditionalData = (
  props: InjectedFormProps<
    SignUpAdditionalDataValues,
    SignUpAdditionalDataProps
  >
) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const smokeLabels = ["yes", "no"];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Field
          name="height"
          component={RenderInputComponent}
          validate={validateThreeDigitNum}
          warn={validateThreeDigitNum}
        />
        <Field
          name="weight"
          component={RenderInputComponent}
          validate={validateThreeDigitNum}
          warn={validateThreeDigitNum}
        />
        <Field
          name="dob"
          component={FormDate}
          validate={validateDate}
          warn={validateDate}
        />
        <Field
          name="emergency_number"
          component={RenderInputComponent}
          validate={validatePhone}
          warn={validatePhone}
        />
        <Field
          name="address"
          component={RenderInputComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
        <Field
          name="smoking"
          component={(props: WrappedFieldProps) => (
            <PickerComponent fieldProps={props} labels={smokeLabels} />
          )}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
        />
      </ScrollView>
      <View style={{ width: "100%", paddingHorizontal: "5%" }}>
        <RoundEdgedButton
          title={t("signUpScreen.signUp")}
          onPress={handleSubmit(submitSignUpAdditionalData)}
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

const Form = reduxForm<SignUpAdditionalDataValues, SignUpAdditionalDataProps>({
  form: "SignUpAdditionalData",
})(SignUpAdditionalData);

export default Form;
