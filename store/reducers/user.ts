import { UserState } from "../../utilities/types/userTypes";
import { createReducer } from "@reduxjs/toolkit";
import { restoreUser, signIn, signOut } from "../actions/user";

const initialState: UserState = {
  userData: null,
  isLoggedIn: false,
  isRestoringData: true,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn.fulfilled, (state, action) => {
      state.isRestoringData = false;
      state.userData = action.payload;
      state.isLoggedIn = true;
    })
    .addCase(signOut.fulfilled, (state) => {
      state.isRestoringData = false;
      state.userData = null;
      state.isLoggedIn = false;
    })
    .addCase(restoreUser.fulfilled, (state, action) => {
      state.isRestoringData = false;
      state.userData = action.payload;
      state.isLoggedIn = action.payload === null ? false : true;
    });
});

export default userReducer;
