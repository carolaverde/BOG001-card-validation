// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe(true);
    });

    test('debería retornar true para "79927398713"', () => {
     expect(validator.isValid("79927398713")).toBe(true);
    });

    test('debería retornar false para "1234567890"', () => {
     expect(validator.isValid("1234567890")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############5616" para "4556364607935616"', () => {
   expect(validator.maskify("4556364607935616")).toBe("############5616");
    });

    test('Debería retornar "1" para "1"', () => {
     expect(validator.maskify("1")).toBe("1");
    });


    test('Debería retornar "######orld" para "helloworld"', () => {
    expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });
});
