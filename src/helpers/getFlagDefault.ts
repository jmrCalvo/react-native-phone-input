import countries from '../data/countries.json';

export const getFlagDefault = (
  defaultCountry: string | null | undefined,
  defaultValue: string | undefined
) => {
  if (defaultCountry) {
    return defaultCountry;
  }

  if (defaultValue) {
    const possibleCountry = countries.filter((country) => {
      return defaultValue
        .replace('+', '')
        .replace('00', '')
        .startsWith(country.dialing_code.replace('+', ''));
    });
    if (possibleCountry?.length && possibleCountry[0]) {
      return possibleCountry[0].flag;
    }
  }

  return 'us';
};
