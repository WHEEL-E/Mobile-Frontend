export interface InvitationData {
  id: string;
  supervisorName: string;
  supervisorPhoto: string;
  supervisorId: string;
  sentAt: Date;
  status: "rejected" | "sent" | "accepted";
}

export interface InvitationCardProps {
  invitaion: InvitationData;
  backGroundColor: string;
}

export interface CardButtonsProps {
  reInvitable: boolean;
  unsendable: boolean;
  timeOut: boolean;
}

export const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
