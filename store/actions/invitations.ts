import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import {
  InvitationData,
  InvitationsActionTypes,
} from "../../utilities/types/sentInvitationsTypes";
import { sendNotification } from "./notifications";
import {
  NotificationDescriptions,
  NotificationType,
} from "../../utilities/types/notificationsTypes";
import { RootState } from "../reducers/rootReducer";
import { UserTypes } from "../../utilities/types/userTypes";

export const getInvitations = createAsyncThunk(
  InvitationsActionTypes.GET_INVITATIONS,
  async (data: { userId: string; userType: string }, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const { userId, userType } = data;

      const type = userType === UserTypes.PATIENT ? "Patient" : "Supervisor";
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.get(
        `${EndPoints.invitations}/userInvitations/${userId}?userType=${type}`,
        {
          headers: { token: user.userData?.token! },
        }
      );

      const resData: InvitationData[] = await response.data.data;
      const invitations =
        type === "Supervisor"
          ? resData.filter((invitation) => invitation.status === "Pending")
          : resData;

      const finalInvitations: InvitationData[] = invitations.map((value) => {
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

      thunkAPI.dispatch(notLoading());
      return finalInvitations;
    } catch (e) {
      thunkAPI.dispatch(notLoading());
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const sendInvitation = createAsyncThunk(
  InvitationsActionTypes.SEND_INVITATION,
  async (
    data: { from_id: string; to_id: string; user_name: string },
    thunkAPI
  ) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.post(
        EndPoints.invitations,
        {
          from_id: data.from_id,
          to_id: data.to_id,
        },
        {
          headers: { token: user.userData?.token! },
        }
      );
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

      sendNotification({
        title: NotificationType.CONNECTIONS,
        user_id: data.to_id,
        description: NotificationDescriptions.RECEIVED_CONNECTION,
        type: NotificationType.CONNECTIONS,
        from_name: data.user_name,
      });

      return invitation;
    } catch (e) {
      console.log(e);
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const unsendInvitation = createAsyncThunk(
  InvitationsActionTypes.UNSEND_INVITATION,
  async (invitationId: string, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.delete(
        `${EndPoints.invitations}/${invitationId}`,
        {
          headers: { token: user.userData?.token! },
        }
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
      const { user } = thunkAPI.getState() as RootState;
      console.log(user.userData?.token);

      const response = await axios.put(
        `${EndPoints.invitations}/${invitationId}`,
        {},
        {
          headers: { token: user.userData?.token! },
        }
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

export const rejectInvitation = createAsyncThunk(
  InvitationsActionTypes.REJECT_INVITATION,
  async (invitationId: string, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.put(
        `${EndPoints.invitations}/reject/${invitationId}`,
        {},
        {
          headers: { token: user.userData?.token! },
        }
      );

      const resData = await response.data.data;
      const updatedInvitation: InvitationData = resData;
      return invitationId;
    } catch (e) {
      console.log(e);
      // thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);

export const acceptInvitation = createAsyncThunk(
  InvitationsActionTypes.ACCEPT_INVITATION,
  async (invitationId: string, thunkAPI) => {
    const { user } = thunkAPI.getState() as RootState;

    try {
      const response = await axios.put(
        `${EndPoints.invitations}/accept/${invitationId}`,
        {},
        {
          headers: { token: user.userData?.token! },
        }
      );

      const resData = await response.data.data;
      const updatedInvitation: InvitationData = resData;

      return updatedInvitation;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      console.log(e);
      throw new Error();
    }
  }
);
