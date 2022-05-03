import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import * as redux from "react-redux";
import PatientHomeScreen from "../PatientHomeScreen";
import * as mainButton from "../../components/buttons/MainButton";
import * as squareButton from "../../components/buttons/SquareButton";
import { MainButton } from "../../components/buttons/MainButton";
import { SquareButton } from "../../components/buttons/SquareButton";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => {
    return {
      t: () => "translated text",
    };
  },
}));

describe("patienthomeScreen", () => {
  beforeAll(() => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation(() => "mockFirstName mockLastName");
  });
  it("makes sure screen matches snapShot", () => {
    const dummyProp: any = () => {};
    const patientHomeScreen = renderer
      .create(<PatientHomeScreen navigation={dummyProp} route={dummyProp} />)
      .toJSON();
    expect(patientHomeScreen).toMatchSnapshot();
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
    expect(welcomeText.children).toContain("translated text");
  });

  it("makes sure first name is rendered", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <PatientHomeScreen navigation={dummyProp} route={dummyProp} />
    );

    const welcomeText = getByTestId("morningText");
    expect(welcomeText.children).toContain("mockFirstName");
    expect(welcomeText.children).not.toContain("mockLastName");
  });
});
