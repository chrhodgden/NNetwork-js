const BinaryConverter = require('../../src/binaryConverter');
const math = require('mathjs');

//import BinaryConverter from 'binaryConverter';

describe('Static testing of BinaryConversion module', () => {
	
	let testConverter;
	let testVector;
	let testInteger;

	beforeEach(() => {
		testConverter = new BinaryConverter(2);
		testInteger = 2;
		testVector = math.matrix([1, 0]);
		testResult = math.matrix([0, 0, 1, 0]);
	});

	test('test private key values from constructor', () => {
		expect(testConverter._inputDigits).toEqual(2);
		expect(testConverter._outputDigits).toEqual(4);
		expect(testConverter._inputActivation).toEqual(math.matrix([0, 0]));
		expect(testConverter._outputActivation).toEqual(math.matrix([1, 0, 0, 0]));
		expect(testConverter._integer).toEqual(0);
	});

	test('test private key values from setting', () => {
		testConverter.integer = testInteger;
		expect(testConverter._inputDigits).toEqual(2);
		expect(testConverter._outputDigits).toEqual(4);
		expect(testConverter._inputActivation).toEqual(math.matrix([0, 0]));
		expect(testConverter._outputActivation).toEqual(math.matrix([0, 0, 1, 0]));
		expect(testConverter._integer).toEqual(2);
	});

	test('convert integer to binary array', () => {
		testConverter.integer = testInteger;
		expect(testConverter.inputActivation).toEqual(testVector);
	});

	test('convert binary array to integer', () => {
		testConverter.inputActivation = testVector;
		expect(testConverter.integer).toEqual(testInteger);
	});

	test('output activation', () => {
		testConverter.inputActivation = testVector;
		expect(testConverter.outputActivation).toEqual(testResult);
	});

});

describe('Dynamic testing of BinaryConversion module', () => {
	
	let testConverter;
	let testVector;
	let testInteger;

	beforeEach(() => {
		testConverter = new BinaryConverter(2);
		testInteger = 2;
		testVector = math.matrix([1, 0]);
	});

	test('Random array returns and sets same vector', () => {
		testVector = testConverter.randomInput();
		expect(testConverter.inputActivation).toEqual(testVector);
	});

	test('Random array initializes correct integer', () => {
		testVector = testConverter.randomInput();
		testInteger = testConverter.integer
		testConverter.inputActivation = testVector;
		expect(testConverter.integer).toEqual(testInteger);
	});

});


