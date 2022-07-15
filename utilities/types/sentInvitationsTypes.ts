export interface InvitationData {
  invitation: {
    _id: string;
    from_id: string;
    to_id: string;
    status: "Pending" | "Accepted" | "Rejected";
    updated_at: Date;
  };
  patient: {
    name: string;
    photo: string;
    gender: "female" | "male";
    birthDate: Date;
  };
  supervisorName: string;
  supervisorPhoto: string;
}

export interface InvitationCardProps {
  invitaion: InvitationData;
  backgroundColor: string;
  userRole: "Patient" | "Supervisor";
}

export interface CardButtonsProps {
  reInvitable: boolean;
  unsendable: boolean;
  timeOut: boolean;
  invitationId: string;
  userRole: "Patient" | "Supervisor";
}

export enum InvitationsActionTypes {
  GET_INVITATIONS = "GET_INVITATIONS",
  SEND_INVITATION = "SEND_INVITATION",
  UNSEND_INVITATION = "UNSEND_INVITATION",
  RESEND_INVITATION = "RESEND_INVITATION",
  REJECT_INVITATION = "REJECT_INVITATION",
  ACCEPT_INVITATION = "ACCEPT_INVITATION",
}

export interface InvitationsState {
  invitations: InvitationData[];
}
