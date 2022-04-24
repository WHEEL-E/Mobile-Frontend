import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WrappedFieldProps } from "redux-form";
import { GetStartedStackParamList } from "../navigationUtils/getStartedNavigationUtils";

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
  type: string;
}

export interface SignUpAdditionalDataValues {
  height: string;
  weight: string;
  age: string;
  gender: string;
  smoke: string;
}

export const submitSignUpMainForm = (
  values: signUpMainFormValues,
  dispatch: any,
  props: signUpMainFormProps
) => {
  const { navigation, setScreen } = props;
  const { type } = values;
  if (type === "supervisor") {
  } else {
    setScreen("SecondPage");
  }
  console.log("submitting form", values);
};

export const submitSignUpAdditionalData = (
  values: SignUpAdditionalDataValues,
  dispatch: any,
  props: SignUpAdditionalDataProps
) => {
  const { navigation } = props;
  navigation.popToTop();
  console.log("submitting form", values);
};

export interface PickerProps {
  fieldProps: WrappedFieldProps;
  labels: string[];
  setType?: React.Dispatch<React.SetStateAction<string>>;
}
