import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";
import { User, UserTypes } from "../../utilities/types/userTypes";
import {
  AssociatedUserData,
  AssociatedUsersActionTypes,
} from "../../utilities/types/associatedUsersTypes";
import { RootState } from "../reducers/rootReducer";

export const getAssociatedUsers = createAsyncThunk(
  AssociatedUsersActionTypes.GET_ALL,
  async (userData: { userId: string; userType: UserTypes }, thunkAPI) => {
    try {
      const { userId, userType } = userData;

      const response = await axios.get(EndPoints.associatedUsers);

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.getAssociatedUsers"));
        throw new Error("can't get associated users");
      }

      const resData = await response.data.data;

      const associatedUsers: AssociatedUserData[] = [];
      for (const data in resData) {
        associatedUsers.push({
          userName: resData[data].name,
          userId: resData[data]._id,
          address: resData[data].address,
          profilePhoto:
            "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
        });
      }

      return associatedUsers;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.getAssociatedUsers"));
      throw err;
    }
  }
);

export const removeUser = createAsyncThunk(
  AssociatedUsersActionTypes.REMOVE_User,
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${EndPoints.associatedUsers}/${userId}`,
        {
          method: "DELETE",
        }
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
      const { user } = thunkAPI.getState() as RootState;
      const { userId, userType } = data;
      let endpoint = `${EndPoints.supervisor}/${userId}`;
      if (userType === UserTypes.PATIENT) {
        endpoint = `${EndPoints.patients}/patient/${userId}`;
      }

      const response = await axios.get(`${endpoint}`, {
        headers: { token: user.userData?.token! },
      });

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

      if (response.data.status !== "Success") {
        throw new Error(response.statusText);
      }
      console.log(userData);
      return userData;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
