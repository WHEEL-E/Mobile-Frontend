import { User, UserTypes } from "../utilities/types/userTypes";

export class Supervisor {
  static userName: string = "";
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

    this.userName = name;
    this.mail = emailAddress;
    this.password = password;
    this.address = address;
    this.phone = phoneNumber;
    this.profilePhoto = profilePhoto;
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
      userType: UserTypes.SUPERVISOR,
    };
    return user;
  };
}
