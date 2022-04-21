import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import PatientHomeScreen from "./PatientHomeScreen";
import * as mainButton from "../components/UI/mainButton";
import * as squareButton from "../components/UI/squareButton";
import { MainButton } from "../components/UI/mainButton";
import { SquareButton } from "../components/UI/squareButton";
import SupervisedPatientScreen from "./SupervisedPatientScreen";

describe("supervisedpatientScreen", () => {
  it("makes sure screen matches snapShot", () => {
    const dummyProp: any = () => {};
    const supervisedpatientScreen = renderer
      .create(
        <SupervisedPatientScreen navigation={dummyProp} route={dummyProp} />
      )
      .toJSON();
    expect(supervisedpatientScreen).toMatchSnapshot();
  });

  it("makes sure button components are called", () => {
    jest.spyOn(mainButton, "MainButton");
    jest.spyOn(squareButton, "SquareButton");

    const dummyProp: any = () => {};
    render(
      <SupervisedPatientScreen navigation={dummyProp} route={dummyProp} />
    );
    expect(MainButton).toBeCalledTimes(2);
    expect(SquareButton).toBeCalledTimes(2);
  });
});
