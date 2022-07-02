import {
  SignUpMainFormValues,
  SignUpRequest,
} from "../utilities/types/signUpTypes";
import { User, UserTypes } from "../utilities/types/userTypes";

export class Supervisor {
  static userName: string = "";
  static password: string = "";
  static profilePhoto: string = "";
  static mail: string = "";
  static phone: number = 0;
  static gender: "male" | "female" = "male";

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

  static prepareUserObject = () => {
    const user: SignUpRequest = {
      data: {
        name: this.userName,
        password: this.password,
        profile_picture: this.profilePhoto,
        email: this.mail,
        phone: this.phone,
        gender: this.gender,
      },
      userType: UserTypes.SUPERVISOR,
    };
    return user;
  };
}
