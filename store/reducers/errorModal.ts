import { ErrorModalActionTypes } from "../actions/errorModal";

const initialState = {
  content: "",
  isVisible: false,
};

export interface ErrorModalAction {
  data?: string;
  type: ErrorModalActionTypes;
}

interface ErrorModalState {
  content: string;
  isVisible: boolean;
}

const errorModalReducer = (
  state = initialState,
  action: ErrorModalAction
): ErrorModalState => {
  switch (action.type) {
    case ErrorModalActionTypes.SHOW_MODAL:
      return {
        content: action.data!,
        isVisible: true,
      };
    case ErrorModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
      };
  }
  return state;
};

export default errorModalReducer;
