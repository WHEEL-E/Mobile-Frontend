import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";
import SignInForm from "../../signInComponents/SignInForm";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../../store/reducers/rootReducer";
import { Provider } from "react-redux";

describe("SignInForm", () => {
  const store = configureStore({ reducer, middleware: [ReduxThunk] });

  const Component = (
    <Provider store={store}>
      <SignInForm />
    </Provider>
  );

  it("makes sure image source is passed properly", () => {
    const signInForm = renderer.create(Component).toJSON();
    expect(signInForm).toMatchSnapshot();
  });

  it("makes sure error message is normally shown", () => {
    const { getAllByTestId } = render(Component);

    const warningText = getAllByTestId("warningText");
    expect(warningText.length).toBe(3);
  });

  it("makes sure error message disappears when adding proper input", () => {
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
