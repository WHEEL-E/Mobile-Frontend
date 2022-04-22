import { arc } from "d3-shape";
import { DEVICE_WIDTH } from "./constants/dimentions";

const PI = 3.14159265359;

export const archs = [
  { start: 0.25, finish: 0.75 },
  { start: 0.25, finish: -0.25 },
  { start: -0.25, finish: -0.75 },
  { start: 0.75, finish: 1.25 },
].map((value: { start: number; finish: number }, index: number) =>
  arc()({
    innerRadius: DEVICE_WIDTH * 0.3,
    outerRadius: DEVICE_WIDTH * 0.4,
    startAngle: PI * value.start,
    endAngle: PI * value.finish,
  })!.toString()
);

export interface DriveWheelButtonProps {
  value: string;
  index: number;
}
