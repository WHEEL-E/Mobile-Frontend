import fonts from "../constants/fonts";
import { DEVICE_HEIGHT } from "../constants/dimentions";

export const ScreenNameText = {
  fontSize: DEVICE_HEIGHT * 0.033,
  fontFamily: fonts.CairoBold,
};

export const HeadingText = {
  fontSize: DEVICE_HEIGHT * 0.04,
  fontFamily: fonts.CairoBold,
};

export const TitleText = {
  fontFamily: fonts.CairoBold,
  fontSize: DEVICE_HEIGHT * 0.02,
};

export const NormalText = {
  fontFamily: fonts.CairoMedium,
  fontSize: DEVICE_HEIGHT * 0.02,
};

export const ImportantText = {
  fontFamily: fonts.CairoBold,
  fontSize: DEVICE_HEIGHT * 0.025,
};

export const NoteText = {
  fontFamily: fonts.CairoRegular,
  fontSize: DEVICE_HEIGHT * 0.015,
};

export const ImportantNote = {
  fontFamily: fonts.CairoSemiBold,
  fontSize: DEVICE_HEIGHT * 0.015,
};
