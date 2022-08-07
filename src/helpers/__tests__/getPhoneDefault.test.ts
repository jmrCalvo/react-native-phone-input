import { getPhoneDefault } from '../getPhoneDefault';

describe('Get phone default', () => {
  test('both undefined', () => {
    const phone = getPhoneDefault(null, undefined);
    expect(phone).toBe('');
  });

  test('default country to spain', () => {
    const phone = getPhoneDefault('es', undefined);
    expect(phone).toBe('+34');
  });

  test('default value and default country to spain ', () => {
    const phoneGenerated = '+34 655 55 55 55';
    const phone = getPhoneDefault('es', phoneGenerated);
    expect(phone).toBe(phoneGenerated);
  });

  test('default value and default country undefined ', () => {
    const phoneGenerated = '+34 655 55 55 55';
    const phone = getPhoneDefault(null, phoneGenerated);
    expect(phone).toBe(phoneGenerated);
  });
});
