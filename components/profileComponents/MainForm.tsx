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
  validateMail,
  validateNotEmpty,
  validatePhone,
  validateThreeDigitNum,
} from "../../utilities/dataValidators";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { UserTypes } from "../../utilities/types/userTypes";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { updateUser } from "../../store/actions/user";

export interface ProfileValues {
  name: string;
  email: string;
  phone: string;
  height?: string;
  weight?: string;
  emergency_number?: string;
  address?: string;
  smoking?: string;
}

const MainForm = (props: InjectedFormProps<ProfileValues>) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const dispatch = useDispatch<any>();

  const smokeLabels = ["yes", "no"];

  const userData = useSelector((state: RootState) => state.user.userData);
  const isPatient = userData?.userType === UserTypes.PATIENT;

  const submitUpdate = (values: ProfileValues) => {
    dispatch(updateUser({ mainData: values, userType: userData?.userType! }));
  };

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
          initial="PSSST"
          placeholder={userData?.userMainData.name}
          value={userData?.userMainData.name}
        />
        <Field
          name="email"
          component={RenderInputComponent}
          validate={validateMail}
          warn={validateMail}
          placeholder={userData?.userMainData.email}
        />
        <Field
          name="phone"
          component={RenderInputComponent}
          validate={validateNotEmpty}
          warn={validateNotEmpty}
          placeholder={userData?.userMainData.phone.toString()}
        />
        {isPatient && (
          <Field
            name="height"
            component={RenderInputComponent}
            validate={validateThreeDigitNum}
            warn={validateThreeDigitNum}
            placeholder={userData?.patientExtraData?.height.toString()}
          />
        )}
        {isPatient && (
          <Field
            name="weight"
            component={RenderInputComponent}
            validate={validateThreeDigitNum}
            warn={validateThreeDigitNum}
            placeholder={userData?.patientExtraData?.weight.toString()}
          />
        )}
        {isPatient && (
          <Field
            name="emergency_number"
            component={RenderInputComponent}
            validate={validatePhone}
            warn={validatePhone}
            placeholder={userData?.patientExtraData?.emergency_number.toString()}
          />
        )}
        {isPatient && (
          <Field
            name="address"
            component={RenderInputComponent}
            validate={validateNotEmpty}
            warn={validateNotEmpty}
            placeholder={userData?.patientExtraData?.address}
          />
        )}
        {isPatient && (
          <Field
            name="smoking"
            component={(props: WrappedFieldProps) => (
              <PickerComponent fieldProps={props} labels={smokeLabels} />
            )}
            validate={validateNotEmpty}
            warn={validateNotEmpty}
            placeholder={userData?.patientExtraData?.smoking}
          />
        )}
      </ScrollView>
      <View style={{ width: "100%", paddingHorizontal: "5%" }}>
        <RoundEdgedButton
          title={"SUBMIT"}
          onPress={handleSubmit(submitUpdate)}
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

const Form = reduxForm<ProfileValues>({
  form: "MainForm",
  enableReinitialize: true,
})(MainForm);

export default Form;
