import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EndPoints } from "../../utilities/constants/endpoints";
import {
  AddConnectionActionTypes,
  searchUser,
} from "../../utilities/types/addConnectionTypes";
import { ShowModal } from "./errorModal";

export const getResults = createAsyncThunk(
  AddConnectionActionTypes.GET_RESULTS_PATIENTS,
  async (prefix: string, thunkAPI) => {
    try {
      const response = await axios.get(EndPoints.searchConnection + prefix);

      const matchingUsers: searchUser[] = response.data.data.map(
        (data: searchUser) => {
          return {
            ...data,
            profilePhoto:
              "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
          };
        }
      );

      return matchingUsers;
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
