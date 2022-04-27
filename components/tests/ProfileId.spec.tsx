import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import ProfileId from "../profileComponents/ProfileId";

describe("navigationBar", () => {
  it("makes sure image source is passed properly", () => {
    const profieId = renderer
      .create(
        <ProfileId
          imgSource={require("../../assets/images/IdPlaceHolder.png")}
          name="testIdName"
        />
      )
      .toJSON();
    expect(profieId).toMatchSnapshot();
  });

  it("makes sure text is passed properly", async () => {
    const { getByTestId } = render(
      <ProfileId
        imgSource={require("../../assets/images/IdPlaceHolder.png")}
        name="testIdName"
      />
    );
    const text = getByTestId("profileIdName");
    expect(text.children).toContain("testIdName");
  });
});
