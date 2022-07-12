import {
  SignUpAdditionalDataValues,
  SignUpMainFormValues,
} from "../utilities/types/signUpTypes";
import { UserTypes } from "../utilities/types/userTypes";

export class Patient {
  static userName: string = "";
  static password: string = "";
  static profilePhoto: string = "";
  static smoking: boolean = false;
  static dob: string = "";
  static height: number = 0;
  static weight: number = 0;
  static gender: "female" | "male" = "male";
  static mail: string = "";
  static phone: number = 0;
  static address: string = "";
  static emergencyContacts: number = 0;

  static addMainFormData = (mainFormValues: SignUpMainFormValues) => {
    const { name, email, password, phone, profile_picture, gender } =
      mainFormValues;

    this.userName = name;
    this.mail = email;
    this.password = password;
    this.phone = phone;
    this.profilePhoto = profile_picture;
    this.gender = gender;
  };

  static addAdditionalFormData = (
    additionalFormValues: SignUpAdditionalDataValues
  ) => {
    const { height, weight, dob, smoking, emergency_number, address } =
      additionalFormValues;

    const year = dob[0];
    const month = dob[1];
    const day = dob[2];

    this.smoking = smoking;
    this.weight = weight;
    this.height = height;
    this.address = address;
    this.dob = `${year}-${month}-${day}`;
    this.emergencyContacts = emergency_number;
  };

  static prepareUserObject = () => {
    const formData = new FormData();
    formData.append("patient_name", this.userName);
    formData.append("password", this.password);
    formData.append("profile_picture", this.profilePhoto);
    formData.append("email", this.mail);
    formData.append("phone", `${this.phone}`);
    formData.append("gender", this.gender);
    formData.append("smoking", `${this.smoking}`);
    formData.append("dob", this.dob);
    formData.append("height", `${this.height}`);
    formData.append("weight", `${this.weight}`);
    formData.append("emergency_number", `${this.emergencyContacts}`);
    formData.append("address", this.address);

    const user = {
      formData: formData,
      userType: UserTypes.PATIENT,
    };
    return user;
  };
}
