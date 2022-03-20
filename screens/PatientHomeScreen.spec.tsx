import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import PatientHomeScreen from "./PatientHomeScreen";
import * as mainButton from "../components/UI/mainButton";
import * as squareButton from "../components/UI/squareButton";
import { MainButton } from "../components/UI/mainButton";
import { SquareButton } from "../components/UI/squareButton";

describe("patienthomeScreen", () => {
  it("makes sure screen matches snapShot", () => {
    const dummyProp: any = () => {};
    const PaitnethomeScreen = renderer
      .create(<PatientHomeScreen navigation={dummyProp} route={dummyProp} />)
      .toJSON();
    expect(PaitnethomeScreen).toMatchSnapshot();
  });

  it("makes sure button componenets are calledd", () => {
    jest.spyOn(mainButton, "MainButton");
    jest.spyOn(squareButton, "SquareButton");

    const dummyProp: any = () => {};
    render(<PatientHomeScreen navigation={dummyProp} route={dummyProp} />);
    expect(MainButton).toBeCalledTimes(3);
    expect(SquareButton).toBeCalledTimes(6);
  });

  it("makes sure text is rendered properly", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <PatientHomeScreen navigation={dummyProp} route={dummyProp} />
    );

    const welcomeText = getByTestId("welcomeText");
    expect(welcomeText.children).toContain("We wish you have a good day");
  });
});
