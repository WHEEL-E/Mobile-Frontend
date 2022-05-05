import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import * as redux from "react-redux";
import * as mainButton from "../../components/buttons/MainButton";
import { MainButton } from "../../components/buttons/MainButton";
import SupervisorHomeScreen from "../SupervisorHomeScreen";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => {
    return {
      t: () => "translated text",
    };
  },
}));

describe("supervisorHomeScreen", () => {
  beforeAll(() => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation(() => "mockFirstName mockLastName");
  });
  it("makes sure screen matches snapShot", () => {
    const dummyProp: any = () => {};
    const supervisorHomeScreen = renderer
      .create(<SupervisorHomeScreen navigation={dummyProp} route={dummyProp} />)
      .toJSON();
    expect(supervisorHomeScreen).toMatchSnapshot();
  });

  it("makes sure button componenets are called", () => {
    jest.spyOn(mainButton, "MainButton");

    const dummyProp: any = () => {};
    render(<SupervisorHomeScreen navigation={dummyProp} route={dummyProp} />);
    expect(MainButton).toBeCalledTimes(4);
  });

  it("makes sure text is rendered properly", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <SupervisorHomeScreen navigation={dummyProp} route={dummyProp} />
    );

    const welcomeText = getByTestId("welcomeText");
    expect(welcomeText.children).toContain("translated text");
  });

  it("makes sure first name is rendered", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(
      <SupervisorHomeScreen navigation={dummyProp} route={dummyProp} />
    );

    const welcomeText = getByTestId("morningText");
    expect(welcomeText.children).toContain("mockFirstName");
    expect(welcomeText.children).not.toContain("mockLastName");
  });
});
