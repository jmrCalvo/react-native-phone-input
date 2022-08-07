interface FlagValidator {
  number: string;
  countryCode: string;
}
export const flagValidador = ({ number, countryCode }: FlagValidator) => {
  switch (countryCode) {
    case 'es':
      let validator = new RegExp(/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/);
      return validator.test(number);

    default:
      return true;
  }
};
