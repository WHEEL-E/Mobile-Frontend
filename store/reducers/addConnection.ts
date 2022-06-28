import { createReducer } from "@reduxjs/toolkit";
import { AddConnectionState } from "../../utilities/types/addConnectionTypes";
import {
  emptyList,
  getResultsPatients,
  getResultsSupervisors,
  setIsLoading,
} from "../actions/addConnection";

const initialState: AddConnectionState = {
  data: [],
  loading: false,
  noMatching: false,
};

const addNewConnectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getResultsPatients.fulfilled, (state, action) => {
      return {
        data: action.payload,
        loading: false,
        noMatching: action.payload.length === 0,
      };
    })
    .addCase(getResultsSupervisors.fulfilled, (state, action) => {
      return {
        data: action.payload,
        loading: false,
        noMatching: action.payload.length === 0,
      };
    })
    .addCase(setIsLoading, (state, action) => {
      return { ...state, loading: action.payload };
    })
    .addCase(emptyList, (state, action) => {
      return { data: [], noMatching: false, loading: false };
    })
    .addDefaultCase((reducer) => reducer);
});

export default addNewConnectionReducer;
