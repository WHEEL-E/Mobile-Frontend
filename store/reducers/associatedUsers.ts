import { createReducer } from "@reduxjs/toolkit";
import { AssocitedUsersState } from "../../utilities/types/associatedUsersTypes";
import { getUserById, removeUser } from "../actions/associatedUsers";

const initialState: AssocitedUsersState = {
  associatedUsers: [],
};

const associatedUsersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(removeUser.fulfilled, (state, action) => {
      const removedUser = action.payload;
      const newUsers = [...state.associatedUsers].filter(
        (user) => user.userId !== removedUser
      );
      return {
        ...state,
        associatedUsers: newUsers,
      };
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      return { ...state, associatedUser: action.payload };
    });
});

export default associatedUsersReducer;
