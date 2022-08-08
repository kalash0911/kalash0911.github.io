export const maskPhoneNumber = (phoneNumber) => {
  const length = phoneNumber.length;

  if (length > 8) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  }

  if (length > 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6)}`;
  }

  if (length > 3) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return phoneNumber;
};
