export interface InvitationData {
  _id: string;
  from_id: string;
  status: "Pending" | "Accepted" | "Rejected";
  to_id: string;
  updated_at: string;
  to_Name: string;
  to_ProfilePhoto: string;
  from_Name: string;
  from_ProfilePhoto: string;
}

export interface InvitationCardProps {
  invitaion: InvitationData;
  backgroundColor: string;
}

export interface CardButtonsProps {
  reInvitable: boolean;
  unsendable: boolean;
  timeOut: boolean;
  invitationId: string;
}

export enum InvitationsActionTypes {
  GET_INVITATIONS = "GET_INVITATIONS",
  SEND_INVITATION = "SEND_INVITATION",
  UNSEND_INVITATION = "UNSEND_INVITATION",
  RESEND_INVITATION = "RESEND_INVITATION",
}

export interface InvitationsState {
  invitations: InvitationData[];
}
