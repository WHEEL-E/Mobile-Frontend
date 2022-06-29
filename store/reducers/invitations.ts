import { createReducer } from "@reduxjs/toolkit";
import {
  getInvitations,
  resendInvitation,
  sendInvitation,
  unsendInvitation,
  acceptInvitation,
  rejectInvitation,
} from "../actions/invitations";
import { InvitationsState } from "../../utilities/types/sentInvitationsTypes";

const initialState: InvitationsState = {
  invitations: [
    {
      _id: "62bcba0ed6af48efb30d0369",
      from_id: "627ecb1d08d1463ebdeedba7",
      to_id: "627ecb0508d1463ebdeedba3",
      status: "Pending",
      updated_at: "2022-06-29T20:46:06.646Z",
      to_Name: "Mohammed Hassam",
      from_Name: "Rania",
      to_ProfilePhoto: "",
      from_ProfilePhoto: "",
    },
  ],
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
    .addCase(unsendInvitation.fulfilled, (state, action) => {
      const removedInvitation = action.payload;
      const updatedInvitations = [...state.invitations].filter(
        (invitaion) => invitaion._id !== removedInvitation
      );
      return {
        invitations: updatedInvitations,
      };
    })
    .addCase(
      resendInvitation.fulfilled ||
        rejectInvitation.fulfilled ||
        acceptInvitation.fulfilled,
      (state, action) => {
        const updatedInvitation = action.payload;
        const updatedInvitations = [...state.invitations];
        const updatedInvitationIndex = updatedInvitations.findIndex(
          (invitaion) => invitaion._id === updatedInvitation._id
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
      }
    );
});

export default invitationsReducer;
