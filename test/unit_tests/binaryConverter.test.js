const BinaryConverter = require('../../src/binaryConverter');
const math = require('mathjs');

//import BinaryConverter from 'binaryConverter';

describe('Test BinaryConversion module', () => {
    
    let testConverter;
    let testVector;
    let testInteger;

    beforeEach(() => {
        testConverter = new BinaryConverter(2);
        testInteger = 2;
        testVector = math.matrix([1, 0]);
    });


    test('convert integer to binary array', () => {
        testConverter.integer = testInteger;
        expect(testConverter.inputActivation).toEqual(testVector);
    });

    test('convert binary array to integer', () => {
        testConverter.inputActivation = testVector;
        expect(testConverter.integer).toEqual(testInteger);
    });

    test.todo('Random array initializes correct integer');

});


