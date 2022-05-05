import { ErrorModalActionTypes } from "../../utilities/types/errorModalTypes";

export const ShowModal = (data: string) => {
  return { type: ErrorModalActionTypes.SHOW_MODAL, data: data };
};

export const hideModal = () => {
  return { type: ErrorModalActionTypes.HIDE_MODAL };
};
