export function usernameValidation(value: string): boolean {
  const smallLetterAlphanumeric = /^[a-z][a-z0-9]{4,19}$/;

  return smallLetterAlphanumeric.test(value);
}

export function passwordValidation(value: string): boolean {
  const alphanumericSpecialCharacters = /^[a-zA-Z0-9~`!@#$%^*()-_+=]{7,19}$/;
  const alphabet = /[a-zA-Z]/g;
  const number = /[0-9]/g;
  const specialCharacters = /[~`!@#$%^*()-_+=]/g;

  return (
    alphanumericSpecialCharacters.test(value) &&
    alphabet.test(value) &&
    number.test(value) &&
    specialCharacters.test(value)
  );
}

export function phoneValidation(value: string): boolean {
  if (value.length === 12 || value.length === 13) return true;
  else return false;
}

export function emailValidation(value: string): boolean {
  const splitString = value.split('@');
  const email = /[a-zA-Z0-9]/g;

  return email.test(splitString[0]);
}
