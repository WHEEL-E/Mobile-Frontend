import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import SignInScreen from "../SignInScreen";
import * as roundEdgedButton from "../../components/buttons/RoundEdgedButton";
import { RoundEdgedButton } from "../../components/buttons/RoundEdgedButton";
import { AuthProvider } from "../../context/AuthContext";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "../../store/reducers/rootReducer";
import ReduxThunk from "redux-thunk";
import React, { useState } from "react";

describe("SignInScreen", () => {
  const store = createStore(reducer, applyMiddleware(ReduxThunk));
  const dummyProp: any = () => {};
  const Screen = (
    <Provider store={store}>
      <AuthProvider>
        <SignInScreen navigation={dummyProp} route={dummyProp} />
      </AuthProvider>
    </Provider>
  );

  it("makes sure screen matches snapShot", () => {
    const signInScreen = renderer.create(Screen).toJSON();
    expect(signInScreen).toMatchSnapshot();
  });

  it("makes sure button is normally shown", () => {
    jest.spyOn(roundEdgedButton, "RoundEdgedButton");
    render(Screen);
    expect(RoundEdgedButton).toBeCalledTimes(1);
  });

  it("makes sure button disappears when keyboard is shown ", () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [true, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    jest.spyOn(roundEdgedButton, "RoundEdgedButton");

    render(Screen);
    expect(RoundEdgedButton).toBeCalledTimes(0);
  });
});
