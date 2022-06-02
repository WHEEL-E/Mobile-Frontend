import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import SignInScreen from "../SignInScreen";
import * as roundEdgedButton from "../../components/buttons/RoundEdgedButton";
import { RoundEdgedButton } from "../../components/buttons/RoundEdgedButton";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../store/reducers/rootReducer";
import { Provider } from "react-redux";

jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => {
    return {
      t: () => "translated text",
    };
  },
}));

describe("SignInScreen", () => {
  const store = configureStore({ reducer, middleware: [ReduxThunk] });
  const dummyProp: any = () => {};

  const Screen = (
    <Provider store={store}>
      <SignInScreen navigation={dummyProp} route={dummyProp} />
    </Provider>
  );

  it("Make sure screen matches snapShot", () => {
    const signInScreen = renderer.create(Screen).toJSON();
    expect(signInScreen).toMatchSnapshot();
  });

  it("Make sure signInButton is rendered", () => {
    jest.spyOn(roundEdgedButton, "RoundEdgedButton");
    render(Screen);
    expect(RoundEdgedButton).toBeCalledTimes(1);
  });

  it("makes sure text is translated", () => {
    const dummyProp: any = () => {};
    const { getByTestId } = render(Screen);

    const welcomeBackText = getByTestId("welcomeBackText");
    expect(welcomeBackText.children).toContain("translated text");
  });
});
