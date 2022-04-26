export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateMail = (text: string) => {
  if (emailRegex.test(text.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (text: string) => {
  if (text.length) {
    return true;
  } else {
    return false;
  }
};
