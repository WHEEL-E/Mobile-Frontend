import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import * as cmp from "../navigationComponents/NavigationComponent";
import NavigationBar from "../navigationComponents/NavigationBar";
import { NavigationComponent } from "../navigationComponents/NavigationComponent";

describe("navigationBar", () => {
  beforeAll(() => {
    jest.spyOn(cmp, "NavigationComponent");
  });

  it("makes sure that NavigationComponent gets called", () => {
    const navigation: any = () => {};
    render(<NavigationBar navigation={navigation} />);
    expect(NavigationComponent).toBeCalledTimes(3);
  });

  it("makes sure colors are correctly rendered", async () => {
    const navigation: any = { navigate: (s: string) => {} };

    const { getByTestId } = render(<NavigationBar navigation={navigation} />);
    await fireEvent.press(getByTestId("Notes"));

    expect(NavigationComponent).toBeCalledWith(
      expect.objectContaining({
        backgroundColor: "transparent",
        color: "#11698E",
        title: "Home",
      }),
      {}
    );

    expect(NavigationComponent).toBeCalledWith(
      expect.objectContaining({
        backgroundColor: "transparent",
        color: "#11698E",
        title: "News",
      }),
      {}
    );

    expect(NavigationComponent).toBeCalledWith(
      expect.objectContaining({
        backgroundColor: "#11698E",
        color: "white",
        title: "Notes",
      }),
      {}
    );
  });
});
