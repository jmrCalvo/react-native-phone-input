import { getCountryByPhone } from './getCountryByPhone';

export const getFlagDefault = (
  defaultCountry: string | null | undefined,
  defaultValue: string | undefined
) => {
  if (defaultCountry) {
    return defaultCountry;
  }

  if (defaultValue) {
    const flagByPhone = getCountryByPhone(defaultValue);
    if (flagByPhone) {
      return flagByPhone;
    }
  }

  return 'us';
};
