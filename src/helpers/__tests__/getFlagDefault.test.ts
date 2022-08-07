import { getCountryByPhone } from '../getCountryByPhone';
import { getFlagDefault } from '../getFlagDefault';

describe('get the flag default', () => {
  test('undefined both', () => {
    const countryCode = getFlagDefault(undefined, undefined);
    expect(countryCode).toBe('us');
  });

  test('default country code', () => {
    const phoneCountryCode = 'sp';
    const countryCode = getFlagDefault(phoneCountryCode, undefined);
    expect(countryCode).toBe(phoneCountryCode);
  });

  test('default value', () => {
    const phone = '+3465555555';
    const countryCode = getFlagDefault(null, phone);
    expect(countryCode).toBe('es');
  });

  test('get country by phone', () => {
    const country = getCountryByPhone('+9991919191');
    expect(country).toBe('');
  });
});
