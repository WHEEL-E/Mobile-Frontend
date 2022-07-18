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
import { signIn, updateUser } from "./user";

export const getInvitations = createAsyncThunk(
  InvitationsActionTypes.GET_INVITATIONS,
  async (data: { userId: string; userType: string }, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const { userId, userType } = data;

      const type = userType;
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.get(
        `${EndPoints.invitations}/userInvitations/${userId}?userType=${type}`,
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }
      // console.log(response.data.data);
      const resData: InvitationData[] = await response.data.data;
      const invitations =
        type === "Supervisor"
          ? resData.filter(
              (invitation) => invitation.invitation.status === "Pending"
            )
          : resData;

      thunkAPI.dispatch(notLoading());
      return invitations;
    } catch (e) {
      console.log(e);
      thunkAPI.dispatch(notLoading());
      thunkAPI.dispatch(ShowModal("An Error occurred"));
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

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }

      const resData: {
        __v: 0;
        _id: "62d4fb0639576b0c435a3558";
        created_at: "2022-07-18T06:17:42.759Z";
        from_id: "62d4c667f39791a46c89458f";
        status: "Pending";
        to_id: "62d4f014637f46378ac68768";
        updated_at: "2022-07-18T06:17:42.759Z";
      } = await response.data.data;

      console.log(resData);
      const invitation: InvitationData = {
        invitation: {
          _id: resData._id,
          from_id: resData.from_id,
          to_id: resData.to_id,
          status: resData.status,
          updated_at: new Date(resData.updated_at),
        },
        supervisorName: data.user_name,
        supervisorPhoto: "",
        patient: {
          name: user.userData?.userMainData.name!,
          gender: user.userData?.userMainData.gender!,
          birthDate: new Date(user.userData?.patientExtraData?.dob!),
          photo: "",
        },
      };

      sendNotification({
        title: NotificationType.CONNECTIONS,
        user_id: data.to_id,
        description: NotificationDescriptions.RECEIVED_CONNECTION,
        type: NotificationType.CONNECTIONS,
        userRole: UserTypes.SUPERVISOR,
      });

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
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.delete(
        `${EndPoints.invitations}/${invitationId}`,
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }
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

      const response = await axios.put(
        `${EndPoints.invitations}/${invitationId}`,
        {},
        {
          headers: { token: user.userData?.token! },
        }
      );
      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }
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
      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }
      const resData = await response.data.data;
      const updatedInvitation: InvitationData = resData;
      return invitationId;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("An Error occurred"));
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
      const userMaindata = user.userData?.userMainData;

      thunkAPI.dispatch(
        signIn({
          type: UserTypes.SUPERVISOR,
          emailAddress: user.userData?.userMainData.email!,
          password: "11111111",
        })
      );

      return invitationId;
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal"));
      throw new Error();
    }
  }
);
