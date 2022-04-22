import { ImageSourcePropType } from "react-native";
import { AutoCompleteType } from "./types/AutoCompleteType";

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
}

export interface profileIdProps {
  imgSource: ImageSourcePropType;
  name: string;
}
