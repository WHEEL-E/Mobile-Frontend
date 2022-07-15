import { AnyAction, createReducer } from "@reduxjs/toolkit";
import {
  getInvitations,
  resendInvitation,
  sendInvitation,
} from "../actions/invitations";
import { InvitationsState } from "../../utilities/types/sentInvitationsTypes";

const initialState: InvitationsState = {
  invitations: [],
};

const invitationsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInvitations.fulfilled, (state, action) => {
      return { invitations: action.payload };
    })
    .addCase(sendInvitation.fulfilled, (state, action) => {
      const newInvitation = action.payload;

      const invitations = [...state.invitations, newInvitation];
      return {
        invitations,
      };
    })
    .addCase(resendInvitation.fulfilled, (state, action) => {
      const updatedInvitation = action.payload;
      const updatedInvitations = [...state.invitations];
      const updatedInvitationIndex = updatedInvitations.findIndex(
        (invitaion) =>
          invitaion.invitation._id === updatedInvitation.invitation._id
      );
      if (updatedInvitationIndex > -1) {
        updatedInvitations[updatedInvitationIndex] = {
          ...updatedInvitations[updatedInvitationIndex],
          ...updatedInvitation,
        };
      }
      return {
        invitations: updatedInvitations,
      };
    })
    .addDefaultCase((state, action) => {
      const removedInvitation = action.payload;
      const updatedInvitations = [...state.invitations].filter(
        (invitaion) => invitaion.invitation._id !== removedInvitation
      );
      return {
        invitations: updatedInvitations,
      };
    });
});

export default invitationsReducer;
