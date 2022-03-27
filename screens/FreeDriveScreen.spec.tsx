import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import * as cmp from "react-native";
import { ImageBackground } from "react-native";
import FreeDriveScreen from "./FreeDriveScreen";

// jest.mock("react-i18next", () => {
//   return {
//     useTranslation: () => {
//       return { t: jest.fn };
//     },
//   };
// });

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: any) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("patienthomeScreen", () => {
  it("makes sure screen matches snapShot", () => {
    const dummyProp: any = () => {};
    const freeDriveScreen = renderer
      .create(<FreeDriveScreen navigation={dummyProp} route={dummyProp} />)
      .toJSON();
    expect(freeDriveScreen).toMatchSnapshot();
  });

  it("makes sure image background is called", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <FreeDriveScreen navigation={dummyProp} route={dummyProp} />
    );
    const backgroundImage = getByTestId("backgroundImage");
    expect(backgroundImage.props.source).toBe(require("../assets/Vector.png"));
  });

  it("makes sure text is rendered properly", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <FreeDriveScreen navigation={dummyProp} route={dummyProp} />
    );
    const instructionText = getByTestId("instructionText");
    expect(instructionText.children).toContain("freeDriveText");
  });
});
