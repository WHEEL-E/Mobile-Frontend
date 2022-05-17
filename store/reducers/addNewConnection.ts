import { createReducer } from "@reduxjs/toolkit";
import {
  emptyList,
  getResultsPatients,
  getResultsSupervisors,
  setIsLoading,
  setNoMatching,
} from "../actions/addNewConnection";

export interface searchUser {
  id: string;
  name: string;
  profilePhoto: string;
}

export interface AddConnectionState {
  data: searchUser[];
  loading: boolean;
  noMatching: boolean;
}

const initialState: AddConnectionState = {
  data: [],
  loading: false,
  noMatching: false,
};

const addNewConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getResultsPatients.fulfilled, (state, action) => {
      return { data: action.payload, loading: false, noMatching: false };
    })
    .addCase(getResultsSupervisors.fulfilled, (state, action) => {
      return { data: action.payload, loading: false, noMatching: false };
    })
    .addCase(setIsLoading, (state, action) => {
      return { ...state, loading: action.payload };
    })
    .addCase(setNoMatching, (state, action) => {
      return { ...state, noMatching: true };
    })
    .addCase(emptyList, (state, action) => {
      return { ...state, data: [] };
    })
    .addDefaultCase((reducer) => reducer);
});

export default addNewConnectionReducer;
