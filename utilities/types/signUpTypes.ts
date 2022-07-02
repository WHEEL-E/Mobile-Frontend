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

export interface SignUpMainFormValues {
  name: string;
  email: string;
  password: string;
  phone: number;
  gender: "female" | "male";
  profile_picture: string;
}

export interface SignUpAdditionalDataValues {
  height: number;
  weight: number;
  dob: number[];
  smoking: boolean;
  emergency_number: number;
  address: string;
}

export interface SignUpRequest {
  data:
    | SignUpMainFormValues
    | (SignUpMainFormValues & SignUpAdditionalDataValues);
  userType: UserTypes;
}

export const submitSignUpMainForm = (
  values: SignUpMainFormValues & { type: UserTypes },
  dispatch: any,
  props: signUpMainFormProps
) => {
  const { setScreen } = props;
  const { type } = values;
  if (type === UserTypes.SUPERVISOR) {
    Supervisor.addMainFormData(values);
    const user = Supervisor.prepareUserObject();
    signUp(user, dispatch);
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
  signUp(user, dispatch);
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
