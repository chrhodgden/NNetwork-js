const activationFunctionList = require('../../src/activationFunctions');
const math = require('mathjs');

describe('Test Activation Function module', () => {

	let result;
	let testVector;
	let testMatrix;
	
    beforeEach(() => {
        testVector = [-2, -1, 0, 1, 2];
    	testVector = math.matrix(testVector);
        testMatrix = math.matrix([testVector, testVector]);
	});
    
	test.todo('Sigmoid Function');
	// result = activationFunctionList['sigmoid'].gx(testVector);
	// result = activationFunctionList['sigmoid'].dg_dx(testVector);
	
	test.todo('RELU Function');
	// result = activationFunctionList['relu'].gx(testMatrix);
	// result = activationFunctionList['relu'].dg_dx(testMatrix);
	
	test.todo('Identity Function');
	// result = activationFunctionList['identity'].gx(testMatrix);
	// result = activationFunctionList['identity'].dg_dx(testMatrix);
		
	// tanh? need to learn more activation functions
	test.todo('Custom Function');

	test.todo('Returns Vector');
	test.todo('Returns Matrix');

});



