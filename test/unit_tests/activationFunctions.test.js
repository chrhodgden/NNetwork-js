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
    
	result = activationFunctionList['sigmoid'].gx(testVector);
	result = activationFunctionList['sigmoid'].dg_dx(testVector);
	
	result = activationFunctionList['relu'].gx(testMatrix);
	result = activationFunctionList['relu'].dg_dx(testMatrix);
	
	result = activationFunctionList['identity'].gx(testMatrix);
	result = activationFunctionList['identity'].dg_dx(testMatrix);
		
	test.todo('Activation Function Tests');

});



