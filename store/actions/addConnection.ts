import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EndPoints } from "../../utilities/constants/endpoints";
import {
  AddConnectionActionTypes,
  searchUser,
} from "../../utilities/types/addConnectionTypes";
import { RootState } from "../reducers/rootReducer";
import { ShowModal } from "./dataStatus";
import { getInvitations } from "./invitations";

export const getResults = createAsyncThunk(
  AddConnectionActionTypes.GET_RESULTS_PATIENTS,
  async (prefix: string, thunkAPI) => {
    try {
      const { user, invitations } = thunkAPI.getState() as RootState;
      const response = await axios.get(EndPoints.searchConnection + prefix, {
        headers: { token: user.userData?.token! },
      });
      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingMatchingPatients"));
        throw new Error(response.statusText);
      }
      const userId = user.userData?.userMainData._id!;
      const userType = user.userData?.userType!;

      await thunkAPI.dispatch(getInvitations({ userId, userType }));

      const invitedUser = invitations.invitations;

      const connectedUser = user.userData?.userMainData.associatedUsers;

      const matchingUsers: searchUser[] = response.data.data;
      const filteredUsers = matchingUsers.filter((field) => {
        return (
          connectedUser?.find((user) => user._id === field._id) === undefined &&
          invitedUser.find((user) => user.invitation.to_id === field._id) ===
            undefined
        );
      });

      return filteredUsers;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingMatchingPatients"));
      throw new Error("can't fetch matching patients");
    }
  }
);

export const setIsLoading = createAction<boolean>(
  AddConnectionActionTypes.SET_IS_LOADING
);

export const emptyList = createAction(AddConnectionActionTypes.EMPTY_LIST);
