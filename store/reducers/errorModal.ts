import {
  ErrorModalAction,
  ErrorModalActionTypes,
  ErrorModalState,
} from "../../utilities/types/errorModalTypes";

const initialState = {
  content: "",
  isVisible: false,
};

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
