import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationComponent } from "../navigationComponents/NavigationComponent";

let getByTestId: any;

describe("Navigationcomponent", () => {
  beforeEach(() => {
    const onPress = jest.fn();
    const renderer = render(
      <NavigationComponent
        onPress={onPress}
        iconName="home"
        title="Home"
        backgroundColor="black"
        color="red"
      />
    );

    getByTestId = renderer.getByTestId;
  });
  it("make sure that Text gets called with the right props", async () => {
    const element = getByTestId("text");
    expect(element.children).toContain("Home");
  });

  it("make sure that Ionicons gets called with the right props", async () => {
    const element = getByTestId("icon");
    expect(element.props.style).toContainEqual(
      expect.objectContaining({ color: "red" })
    );
  });

  it("make sure that MainView gets called with the right props", async () => {
    const element = getByTestId("view");
    expect(element.props.style).toStrictEqual(
      expect.objectContaining({
        backgroundColor: "black",
      })
    );
  });
});
