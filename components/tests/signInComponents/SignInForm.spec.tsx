import React from "react";
import ReduxThunk from "redux-thunk";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react-native";
import reducer from "../../../store/reducers/rootReducer";
import SignInForm from "../../signInComponents/SignInForm";

describe("SignInForm", () => {
  const store = configureStore({ reducer, middleware: [ReduxThunk] });

  const Component = (
    <Provider store={store}>
      <SignInForm />
    </Provider>
  );

  it("Make sure form matches snapshot", () => {
    const signInForm = renderer.create(Component).toJSON();
    expect(signInForm).toMatchSnapshot();
  });

  it("Make sure error message is normally shown", () => {
    const { getAllByTestId } = render(Component);

    const warningText = getAllByTestId("warningText");
    expect(warningText.length).toBe(3);
  });

  it("Make sure error message disappears when adding proper input", () => {
    const signInData = {
      mail: "placeHolder@mail.com",
      password: "Rand0mPassw0rd!",
    };

    const { getByTestId, getAllByTestId } = render(Component);

    const mailField = getByTestId("signInemailAddress");
    const password = getByTestId("signInpassword");

    fireEvent.changeText(mailField, signInData.mail);
    fireEvent.changeText(password, signInData.password);

    const warningText = getAllByTestId("warningText");
    expect(warningText.length).toBe(1);
  });
});
