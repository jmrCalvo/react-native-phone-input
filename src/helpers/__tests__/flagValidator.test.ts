import { flagValidador } from '../flagValidator';

describe('UNDEFINED validator', () => {
  test('undefined', () => {
    const isValid = flagValidador({ countryCode: 'qp', number: '' });
    expect(isValid).toBe(true);
  });
});

describe('ES validator', () => {
  test('flag validator function ES empty', () => {
    const isValid = flagValidador({ countryCode: 'es', number: '' });
    expect(isValid).toBe(false);
  });

  test('flag validator function ES invalid', () => {
    const isValid = flagValidador({ countryCode: 'es', number: '0' });
    expect(isValid).toBe(false);
  });

  test('flag validator function ES longer', () => {
    const isValid = flagValidador({
      countryCode: 'es',
      number: '655 555 555 555',
    });
    expect(isValid).toBe(false);
  });

  test('flag validator function ES valid', () => {
    const isValid = flagValidador({
      countryCode: 'es',
      number: '655 555 555',
    });
    expect(isValid).toBe(false);
  });
});
