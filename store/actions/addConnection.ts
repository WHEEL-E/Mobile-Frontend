import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EndPoints } from "../../utilities/constants/endpoints";
import {
  AddConnectionActionTypes,
  searchUser,
} from "../../utilities/types/addConnectionTypes";
import { ShowModal } from "./errorModal";

export const getResultsPatients = createAsyncThunk(
  AddConnectionActionTypes.GET_RESULTS_PATIENTS,
  async (prefix: string, thunkAPI) => {
    try {
      const response = await fetch(EndPoints.searchConnection + prefix);

      const matchingUsers: searchUser[] = [];

      const resData = await response.json();
      for (const data in resData) {
        matchingUsers.push({
          name: resData[data].name,
          id: resData[data].id,
          profilePhoto: resData[data].uri,
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
  AddConnectionActionTypes.GET_RESULTS_SUPERVISORS,
  async (prefix: string, thunkAPI) => {
    try {
      const response = await fetch(EndPoints.searchConnection + prefix);

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

export const sendConnectionRequest = createAsyncThunk(
  AddConnectionActionTypes.GET_RESULTS_SUPERVISORS,
  async (data: { sendingId: string; receivingId: string }, thunkAPI) => {
    try {
      const response = await axios.post(`${EndPoints.searchConnection}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.sendingConnection"));
        throw new Error("Can't send connection");
      }
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal.sendingConnection"));
      throw new Error("Can't send connection");
    }
  }
);

export const setIsLoading = createAction<boolean>(
  AddConnectionActionTypes.SET_IS_LOADING
);

export const emptyList = createAction(AddConnectionActionTypes.EMPTY_LIST);
