import { User, UserTypes } from "../utilities/types/userTypes";

export class Patient {
  static userName: string = "";
  static password: string = "";
  static profilePhoto: string = "";
  static smoking: boolean = false;
  static age: number = 0;
  static height: number = 0;
  static weight: number = 0;
  static gender: "female" | "male" = "male";
  static mail: string = "";
  static phone: string = "";
  static address: string = "";
  static emergencyContacts: string[] = [];
  static healthRecords: string[] = [];
  static healthMonitor: object = {};

  static addMainFormData = (mainFormValues: {
    name: string;
    emailAddress: string;
    password: string;
    address: string;
    phoneNumber: string;
    profilePhoto: string;
  }) => {
    const { name, emailAddress, password, address, phoneNumber, profilePhoto } =
      mainFormValues;

    this.userName = name;
    this.mail = emailAddress;
    this.password = password;
    this.address = address;
    this.phone = phoneNumber;
    this.profilePhoto = profilePhoto;
  };

  static addAdditionalFormData = (additionalFormValues: {
    height: number;
    weight: number;
    age: number;
    gender: "female" | "male";
    smoke: "yes" | "no";
    emergencyContacts: string[];
  }) => {
    const { height, weight, age, gender, smoke, emergencyContacts } =
      additionalFormValues;

    this.smoking = smoke === "yes" ? true : false;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.gender = gender;
    this.emergencyContacts = emergencyContacts;
  };

  static prepareUserObject = () => {
    const user: User = {
      userMainData: {
        userName: this.userName,
        password: this.password,
        profilePhoto: this.profilePhoto,
        mail: this.mail,
        phone: this.phone,
        address: this.address,
      },
      patientExtraData: {
        smoking: this.smoking,
        age: this.age,
        height: this.height,
        weight: this.weight,
        gender: this.gender,
        emergencyContacts: this.emergencyContacts,
        healthRecords: this.healthRecords,
        healthMonitor: this.healthMonitor,
      },
      userType: UserTypes.PATIENT,
    };
    return user;
  };
}
