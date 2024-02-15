const activationFunctionList = require('../../src/activationFunctions');
const math = require('mathjs');

describe('Test Activation Function module', () => {

	let result;
	let targetResult;
	let testVector;
	let testMatrix;
	
    beforeEach(() => {
        testVector = [-2, -1, 0, 1, 2];
    	testVector = math.matrix(testVector);
        testMatrix = math.matrix([testVector, testVector]);	    
    	});

	test('Sigmoid Function', () => {
		result = activationFunctionList['sigmoid'].gx(testVector);
		expect(result._data[2]).toEqual(0.5);

		result = activationFunctionList['sigmoid'].dg_dx(testVector);
		expect(result._data[2]).toEqual(0.25);
	});

	test('RELU Function', () => {
		targetResult = [0, 0, 0, 1, 2];
    		targetResult = math.matrix(targetResult);
		result = activationFunctionList['relu'].gx(testVector);
		console.log(result);
		console.log(targetResult);
		expect(result).toEqual(targetResult);

		targetResult = [0, 0, 0, 1, 1];
    		targetResult = math.matrix(targetResult);
		result = activationFunctionList['relu'].dg_dx(testVector);
		expect(result).toEqual(targetResult);
	});

	test.todo('Identity Function');
	// result = activationFunctionList['identity'].gx(testMatrix);
	// result = activationFunctionList['identity'].dg_dx(testMatrix);
		
	// tanh? need to learn more activation functions
	test.todo('Custom Function');

	test.todo('Returns Vector');
	test.todo('Returns Matrix');

});



