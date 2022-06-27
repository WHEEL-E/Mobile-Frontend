import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";
import {
  InvitationData,
  InvitationsActionTypes,
} from "../../utilities/types/sentInvitationsTypes";

export const getInvitations = createAsyncThunk(
  InvitationsActionTypes.GET_INVITATIONS,
  async (data: { userId: string; userType: string }, thunkAPI) => {
    const id = "627ecb1d08d1463ebdeedba7";
    const type = "Patient";

    try {
      const response = await axios.get(
        `${EndPoints.invitations}/userInvitations/${id}?userType=${type}`
      );

      const resData: InvitationData[] = await response.data.data;
      const invitations: InvitationData[] = resData.map((value) => {
        return {
          ...value,
          to_Name: "Random Name",
          to_ProfilePhoto:
            "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
          from_Name: "Random Name",
          from_ProfilePhoto:
            "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
        };
      });

      return invitations;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const sendInvitation = createAsyncThunk(
  InvitationsActionTypes.SEND_INVITATION,
  async (data: { from_id: string; to_id: string }, thunkAPI) => {
    try {
      const response = await axios.post(EndPoints.invitations, data);
      const resData = await response.data.data;

      const invitation: InvitationData = {
        ...resData,
        to_Name: "Random Name",
        to_ProfilePhoto:
          "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
        from_Name: "Random Name",
        from_ProfilePhoto:
          "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
      };

      return invitation;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const unsendInvitation = createAsyncThunk(
  InvitationsActionTypes.UNSEND_INVITATION,
  async (invitationId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${EndPoints.invitations}/${invitationId}`
      );

      const resData = await response.data;

      return invitationId;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const resendInvitation = createAsyncThunk(
  InvitationsActionTypes.RESEND_INVITATION,
  async (invitationId: string, thunkAPI) => {
    try {
      const response = await axios.put(
        `${EndPoints.invitations}/${invitationId}`
      );

      const resData = await response.data.data;
      const updatedInvitation: InvitationData = resData;

      return updatedInvitation;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);