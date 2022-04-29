export enum ErrorModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
}

export const ShowModal = (data: string) => {
  return { type: ErrorModalActionTypes.SHOW_MODAL, data: data };
};

export const hideModal = () => {
  return { type: ErrorModalActionTypes.HIDE_MODAL };
};
