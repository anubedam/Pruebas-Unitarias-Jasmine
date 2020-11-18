//import { suma } from '../src/suma.js'; --> Cannot use import statement outside a module
const suma = require('../src/suma.js');

describe("Pruebas de la función suma", function() {

    it("La suma de 2 y 2 es 4", function() {
      expect(suma(2,2)).toBe(4);
    });

    it("La suma de -1 y 3 es 2", function() {
        expect(suma(-1,3)).toBe(2);
    });

    it("La suma de 0 y 4 es 4", function() {
        expect(suma(0,4)).toBe(4);
    });

    it("La suma de -3 y -5 es -8", function() {
        expect(suma(-3,-5)).toBe(-8);
    });

});