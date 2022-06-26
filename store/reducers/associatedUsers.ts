import { createReducer } from "@reduxjs/toolkit";
import { AssocitedUsersState } from "../../utilities/types/associatedUsersTypes";
import { getAssociatedUsers, removeUser } from "../actions/associatedUsers";

const initialState: AssocitedUsersState = {
  associatedUsers: [],
};

const associatedUsersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAssociatedUsers.fulfilled, (state, action) => {
      return { associatedUsers: action.payload };
    })
    .addCase(removeUser.fulfilled, (state, action) => {
      const removedUser = action.payload;
      const newUsers = [...state.associatedUsers].filter(
        (user) => user.userId !== removedUser
      );
      return {
        associatedUsers: newUsers,
      };
    });
});

export default associatedUsersReducer;
