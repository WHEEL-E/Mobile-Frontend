import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "redux";
import { EventOrValueHandler, WrappedFieldProps } from "redux-form";
import { Patient } from "../../models/patient";
import { Supervisor } from "../../models/supervisor";
import { signUp } from "../../store/actions/user";
import { GetStartedStackParamList } from "./navigationTypes/getStartedNavigationTypes";
import { UserTypes } from "./userTypes";

export interface signUpMainFormProps {
  navigation: NativeStackNavigationProp<GetStartedStackParamList, "SignUp">;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

export interface SignUpAdditionalDataProps {
  navigation: NativeStackNavigationProp<GetStartedStackParamList, "SignUp">;
}

export interface signUpMainFormValues {
  name: string;
  emailAddress: string;
  password: string;
  address: string;
  phoneNumber: string;
  type: UserTypes;
  profilePhoto: string;
}

export interface SignUpAdditionalDataValues {
  height: number;
  weight: number;
  age: number;
  gender: "female" | "male";
  smoke: "yes" | "no";
  emergencyContacts: string[];
}

export const submitSignUpMainForm = (
  values: signUpMainFormValues,
  dispatch: any,
  props: signUpMainFormProps
) => {
  const { setScreen } = props;
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
  dispatch: Dispatch<any>
) => {
  Patient.addAdditionalFormData(values);
  const user = Patient.prepareUserObject();
  dispatch(signUp(user));
};

export interface PickerProps {
  fieldProps: WrappedFieldProps;
  labels: string[];
  setType?: React.Dispatch<React.SetStateAction<UserTypes>>;
}

export interface EmergencyContactFieldProps {
  index: number;
  value: string[];
  list: JSX.Element[];
  onChange: EventOrValueHandler<React.ChangeEvent<any>>;
  setList: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}
