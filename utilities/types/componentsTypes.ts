import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";
import { AutoCompleteType } from "./autoCompleteType";
import { MainStackParamList } from "./navigationTypes/mainNavigationTypes";

export interface AssociatedUserProps {
  userInfo: {
    _id: string;
    name: string;
    address: string;
    profile_picture: string;
  };
  navigation: NativeStackNavigationProp<
    MainStackParamList,
    "AssociatedUsers",
    undefined
  >;
  backgroundColor: string;
}

export interface EditableInputFieldProps {
  placeHolder: string;
  fieldStyle: object;
  autoComplete: AutoCompleteType;
  value: string;
  onChangeText: (text: string) => void;
  onSave: () => void;
}

export interface InputFieldProps {
  placeHolder: string;
  fieldStyle: object;
  autoComplete: AutoCompleteType;
  value: string;
  onChangeText: (text: string) => void;
  secureText?: boolean;
  onBlur?: () => void;
  testId?: string;
}

export interface profileIdProps {
  imgSource: ImageSourcePropType;
  name: string;
}

export interface EmergencyCallModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (state: boolean) => void;
}
