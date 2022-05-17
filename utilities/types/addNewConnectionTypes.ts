export enum AddNewConnectionActionTypes {
  GET_RESULTS_PATIENTS = "GET_RESULTS_PATIENTS",
  GET_RESULTS_SUPERVISORS = "GET_RESULTS_SUPERVISORS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_NO_MATCHING = "SET_NO_MATCHING",
}

export interface UserCardProps {
  name: string;
  imageUri: string;
}
