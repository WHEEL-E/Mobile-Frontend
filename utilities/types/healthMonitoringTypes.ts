export interface CurveProps {
  data: [number, number][];
}

export interface ChartProps {
  data: [number, number][];
}

export interface SensorData {
  name: string;
  data: [number, number][];
}

export interface UserSensors {
  SPO2: number;
  user_id: number;
  Pulse: number;
  time: string;
  temprature: number;
}
