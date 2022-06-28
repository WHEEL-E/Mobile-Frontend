import React from "react";
import ReduxThunk from "redux-thunk";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react-native";
import SignInScreen from "../SignInScreen";
import reducer from "../../store/reducers/rootReducer";
import { RoundEdgedButton } from "../../components/buttons/RoundEdgedButton";
import * as roundEdgedButton from "../../components/buttons/RoundEdgedButton";

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

  it("Make sure text is translated", () => {
    const { getByTestId } = render(Screen);
    const welcomeBackText = getByTestId("welcomeBackText");
    expect(welcomeBackText.children).toContain("translated text");
  });
});
