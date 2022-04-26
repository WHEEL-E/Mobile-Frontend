import { Dispatch } from "redux";
import * as SecureStore from "expo-secure-store";
import {
  Patient,
  Supervisor,
  UserActionTypes,
  UserTypes,
} from "../../utilities/userUtils";

export const storeUser = (user: Supervisor | Patient, userType: UserTypes) => {
  const data = { mainData: user, userType };
  return async (dispatch: Dispatch<any>) => {
    try {
      await SecureStore.setItemAsync("userdata", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: UserActionTypes.STORE_USER, data: data });
  };
};

export const deleteUser = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await SecureStore.deleteItemAsync("userdata");
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: UserActionTypes.DELETE_USER });
  };
};

export const restoreUser = () => {
  return async (dispatch: Dispatch<any>) => {
    let userData: string | null = null;
    try {
      userData = await SecureStore.getItemAsync("userData");
    } catch (e) {
      console.log(e);
    }

    if (userData) {
      const user = JSON.parse(userData);
      dispatch(storeUser(user.mainData, user.userType));
    }
  };
};
