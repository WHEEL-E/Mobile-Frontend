import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EndPoints } from "../../utilities/constants/endpoints";
import { AddNewConnectionActionTypes } from "../../utilities/types/addNewConnectionTypes";
import { searchUser } from "../reducers/addNewConnection";
import { ShowModal } from "./errorModal";

export const getResultsPatients = createAsyncThunk(
  AddNewConnectionActionTypes.GET_RESULTS_PATIENTS,
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
  AddNewConnectionActionTypes.GET_RESULTS_SUPERVISORS,
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
  AddNewConnectionActionTypes.GET_RESULTS_SUPERVISORS,
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
  AddNewConnectionActionTypes.SET_IS_LOADING
);

export const setNoMatching = createAction<boolean>(
  AddNewConnectionActionTypes.SET_NO_MATCHING
);

export const emptyList = createAction(AddNewConnectionActionTypes.EMPTY_LIST);
