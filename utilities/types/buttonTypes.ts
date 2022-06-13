import { ImageSourcePropType } from "react-native";

export interface InputBackButtonProps {
  onPress: () => void;
}

export interface MainButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
  icon?: { name: any; size: number; color: string };
  image?: { url: ImageSourcePropType };
}

export interface roundEdgedButtonProps {
  title: string;
  backgroundColor: string;
  onPress: () => void;
}

export interface SquareButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
  disabled?: boolean;
}
