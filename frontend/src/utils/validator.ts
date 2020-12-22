export const isEmailValid = (email: string): boolean => {
  if (email.length > 0) {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return email !== undefined && regexEmail.test(email.trim());
  }
  return true;
};
