import countries from '../data/countries.json';

export const getPhoneDefault = (
  defaultCountry: string | null,
  defaultValue: string | undefined
) => {
  if (!defaultCountry) {
    return defaultValue;
  }

  const dialogCode =
    countries.find((country) => country.flag === defaultCountry)
      ?.dialing_code || '';

  if (!defaultValue) {
    return dialogCode;
  }

  return `${dialogCode} ${defaultValue}`;
};
