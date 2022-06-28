import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EventOrValueHandler, WrappedFieldProps } from "redux-form";
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
