import { ImageSourcePropType } from "react-native";
import { AutoCompleteType } from "./autoCompleteType";

export interface AssociatedPatientProps {
  patientName: string;
  patientAddress: string;
  onPress: () => void;
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
}

export interface profileIdProps {
  imgSource: ImageSourcePropType;
  name: string;
}
