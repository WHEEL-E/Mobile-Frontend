import { UserMainData, UserState } from "../../utilities/types/userTypes";
import { createReducer } from "@reduxjs/toolkit";
import { restoreUser, signIn, signOut, signUp } from "../actions/user";
import { verifyEmail } from "../actions/mailVerification";

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
      state.isLoggedIn =
        action.payload && action.payload.userMainData.isVerified ? true : false;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.isRestoringData = false;
      state.userData = action.payload;
      state.isLoggedIn = false;
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
    })
    .addCase(verifyEmail.fulfilled, (state, action) => {
      const userMainData: UserMainData = {
        ...state.userData?.userMainData!,
        isVerified: action.payload === "Success" ? true : false,
      };
      state.userData = { ...state.userData!, userMainData };
      state.isLoggedIn = true;
      state.isRestoringData = false;
    });
});

export default userReducer;
