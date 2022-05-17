import { createReducer } from "@reduxjs/toolkit";
import {
  getResultsPatients,
  getResultsSupervisors,
} from "../actions/addNewConnection";

export interface searchUser {
  id: string;
  name: string;
  profilePhoto: string;
}

export interface AddConnectionState {
  data: searchUser[];
  loading: boolean;
}

const initialState: AddConnectionState = {
  data: [],
  loading: false,
};

const addNewConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getResultsPatients.fulfilled, (state, action) => {
      return { ...state, data: action.payload };
    })
    .addCase(getResultsSupervisors.fulfilled, (state, action) => {
      return { ...state, data: action.payload };
    })

    .addDefaultCase((reducer) => reducer);
});

export default addNewConnectionReducer;
