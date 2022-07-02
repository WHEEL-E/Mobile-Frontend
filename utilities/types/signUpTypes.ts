import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EventOrValueHandler, WrappedFieldProps } from "redux-form";
import { GetStartedStackParamList } from "./navigationTypes/getStartedNavigationTypes";
import { UserTypes } from "./userTypes";

export interface SignUpMainFormProps {
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
