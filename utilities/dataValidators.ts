export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//can start with + and contains only numbers and - after
export const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

//a number from two to three digits
export const ThreeDigitRegex = /^([0-9]{1}|[0-9]{2}|[0-9]{3})$/;

export const validateMail = (text: string | undefined) => {
  if (!(text && emailRegex.test(text.toLowerCase()) && text.length >= 10)) {
    return "signUpScreen.warningMail";
  } else {
    return undefined;
  }
};

export const validatePassword = (text: string | undefined) => {
  if (!(text && text.length >= 8)) {
    return "signUpScreen.warningPassword";
  } else {
    return undefined;
  }
};

export const validateNotEmpty = (text: string | boolean | undefined) => {
  if (
    text === undefined ||
    (typeof text === "string" && text.trim().length < 3)
  ) {
    return "signUpScreen.warningText";
  }
  return undefined;
};

export const validatePhone = (text: string | undefined) => {
  if (!(text && phoneRegex.test(text))) {
    return "signUpScreen.warningphone";
  } else {
    return undefined;
  }
};

export const validateThreeDigitNum = (text: string | undefined) => {
  if (!(text && ThreeDigitRegex.test(text))) {
    return "signUpScreen.warningNumber";
  } else {
    return undefined;
  }
};

export const validateMatching = (text: string, reference: string) => {
  if (text !== reference) {
    return "notValid";
  } else {
    return undefined;
  }
};

export const validateDate = (data: number[]) => {
  if (!data) {
    return "signUpScreen.warningDate";
  }
  if (data.length != 3) {
    return "signUpScreen.warningDate";
  }
  if (data[0] < 1900) {
    return "signUpScreen.warningDate";
  }
  if (data[1] < 1 || data[1] > 12) {
    return "signUpScreen.warningDate";
  }
  if (data[2] < 1 || data[2] > 30) {
    return "signUpScreen.warningDate";
  }
};
