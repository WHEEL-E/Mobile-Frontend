import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import { Ionicons } from "@expo/vector-icons";
import DriveWheel from "./DriveWheel";

jest.mock("@expo/vector-icons");

describe("driveWheel", () => {
  it("make sure the component matches the snapshot", () => {
    const driveWheel = renderer.create(<DriveWheel />).toJSON();
    expect(driveWheel).toMatchSnapshot();
  });

  it("makes sure the arrows are called", () => {
    render(<DriveWheel />);
    expect(Ionicons).toBeCalledTimes(4);
  });
});
