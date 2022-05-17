import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AddNewConnectionActionTypes } from "../../utilities/types/addNewConnectionTypes";
import { searchUser } from "../reducers/addNewConnection";
import { ShowModal } from "./errorModal";

export const getResultsPatients = createAsyncThunk(
  AddNewConnectionActionTypes.GET_RESULTS_PATIENTS,
  async (prefix: string, thunkAPI) => {
    try {
      const response = await fetch(
        "https://fa-search-backend.herokuapp.com/search?delay=true&term=" +
          prefix
      );

      const matchingUsers: searchUser[] = [];

      const resData = await response.json();
      for (const data in resData) {
        matchingUsers.push({
          name: resData[data].name,
          id: resData[data].id,
          profilePhoto: resData[data].profilePhoto,
        });
      }

      return matchingUsers;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingMatchingPatients"));
      throw new Error("can't fetch matching patients");
    }
  }
);

export const getResultsSupervisors = createAsyncThunk(
  AddNewConnectionActionTypes.GET_RESULTS_SUPERVISORS,
  async (prefix: string, thunkAPI) => {
    try {
      const response = await fetch(
        "https://fa-search-backend.herokuapp.com/search?delay=true&term=" +
          prefix
      );

      const matchingUsers: searchUser[] = [];

      const resData = await response.json();
      for (const data in resData) {
        matchingUsers.push({
          name: resData[data].userName,
          id: resData[data].id,
          profilePhoto: resData[data].profilePhoto,
        });
      }
      return matchingUsers;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingMatchingSupervisors"));
      throw new Error("can't fetch matching supervisors");
    }
  }
);

export const setIsTyping = createAction<boolean>(
  AddNewConnectionActionTypes.SET_IS_TYPING
);

export const setUserPrefix = createAction<string>(
  AddNewConnectionActionTypes.SET_USER_PREFIX
);
