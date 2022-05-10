import { User, UserTypes } from "../utilities/types/userTypes";

export class Supervisor {
  static username: string = "";
  static password: string = "";
  static profilePhoto: string = "";
  static mail: string = "";
  static phone: string = "";
  static address: string = "";

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

    this.username = name;
    this.mail = emailAddress;
    this.password = password;
    this.address = address;
    this.phone = phoneNumber;
    this.profilePhoto = profilePhoto;
  };

  static prepareUserObject = () => {
    const user: User = {
      mainData: {
        userName: this.username,
        password: this.password,
        profilePhoto: this.profilePhoto,
        mail: this.mail,
        phone: this.phone,
        address: this.address,
      },
      userType: UserTypes.SUPERVISOR,
    };
    return user;
  };
}
