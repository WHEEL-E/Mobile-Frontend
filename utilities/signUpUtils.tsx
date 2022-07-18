import { UserTypes } from "./types/userTypes";
import { Supervisor } from "../models/supervisor";
import { Patient } from "../models/patient";
import { signUp } from "../store/actions/user";
import {
  SignUpAdditionalDataProps,
  SignUpAdditionalDataValues,
  SignUpMainFormProps,
  SignUpMainFormValues,
} from "./types/signUpTypes";

export const submitSignUpMainForm = (
  values: SignUpMainFormValues & { type: UserTypes },
  dispatch: any,
  props: SignUpMainFormProps
) => {
  const { setScreen, navigation } = props;
  const { type } = values;

  if (type === UserTypes.SUPERVISOR) {
    Supervisor.addMainFormData(values);
    const user = Supervisor.prepareUserObject();
    dispatch(signUp(user));
  } else {
    Patient.addMainFormData(values);
    setScreen("SecondPage");
  }
};

export const submitSignUpAdditionalData = (
  values: SignUpAdditionalDataValues,
  dispatch: any,
  props: SignUpAdditionalDataProps
) => {
  const { navigation } = props;

  Patient.addAdditionalFormData(values);
  const user = Patient.prepareUserObject();
  dispatch(signUp(user));
};
