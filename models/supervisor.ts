import { SignUpMainFormValues } from "../utilities/types/signUpTypes";
import { UserTypes } from "../utilities/types/userTypes";

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
    const formData = new FormData();
    formData.append("name", this.userName);
    formData.append("password", this.password);
    formData.append("profile_picture", this.profilePhoto);
    formData.append("email", this.mail);
    formData.append("phone", `${this.phone}`);
    formData.append("gender", this.gender);

    const user = {
      formData: formData,
      userType: UserTypes.SUPERVISOR,
    };
    return user;
  };
}
