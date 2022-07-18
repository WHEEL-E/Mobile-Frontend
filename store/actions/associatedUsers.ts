import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { User, UserTypes } from "../../utilities/types/userTypes";
import { RootState } from "../reducers/rootReducer";
import { isLoading, notLoading, ShowModal } from "./dataStatus";
import { AssociatedUsersActionTypes } from "../../utilities/types/associatedUsersTypes";

export const removeUser = createAsyncThunk(
  AssociatedUsersActionTypes.REMOVE_User,
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${EndPoints.associatedUsers}/${userId}`
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.removeUser"));
        throw new Error("Can't remove user");
      }

      return userId;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.removeUser"));
      throw err;
    }
  }
);

export const getUserById = createAsyncThunk(
  "",
  async (data: { userId: string; userType: UserTypes }, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());

      const { user } = thunkAPI.getState() as RootState;
      const { userId, userType } = data;
      let endpoint = `${EndPoints.supervisor}/${userId}`;
      if (userType === UserTypes.PATIENT) {
        endpoint = `${EndPoints.patients}/patient/${userId}`;
      }

      const response = await axios.get(`${endpoint}`, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }

      const resData = response.data.data;
      const userData: User = {
        userMainData: {
          _id: resData._id,
          name: resData.name,
          email: resData.email,
          phone: resData.phone,
          isVerified: resData.isVerified,
          profile_picture: resData.profile_picture,
          gender: resData.gender,
          associatedUsers: resData.associatedUsers,
        },
        userType: userType,
        patientExtraData:
          userType === UserTypes.PATIENT
            ? {
                smoking: resData.smoking,
                address: resData.address,
                dob: resData.dob,
                height: resData.height,
                emergency_number: resData.emergency_number,
                weight: resData.weight,
              }
            : undefined,
        token: resData.token,
      };

      thunkAPI.dispatch(notLoading());
      return userData;
    } catch (e) {
      thunkAPI.dispatch(notLoading());
      throw e;
    }
  }
);
