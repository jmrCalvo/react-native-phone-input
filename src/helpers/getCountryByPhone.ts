import countries from '../data/countries.json';

export const getCountryByPhone = (phone: string) => {
  const possibleCountry = countries.filter((country) => {
    return phone
      .replace('+', '')
      .replace('00', '')
      .startsWith(country.dialing_code.replace('+', ''));
  });
  if (possibleCountry?.length && possibleCountry[0]) {
    return possibleCountry[0].flag;
  }

  return '';
};
