import { ImageSourcePropType } from "react-native";

export interface SensorCardProps {
  sensor: SenorCardData;
}

export interface SenorCardData {
  sensorName: string;
  image: ImageSourcePropType;
  value: number;
  unit: string;
}
