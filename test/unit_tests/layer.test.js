const BinaryConverter = require('../../src/binaryConverter');
const Layer = require('../../src/layer');
const math = require('mathjs');

describe('Test Layer module', () => {

	let testLayer;
	let testConv;
	
	beforeEach(() => {
		testConv = new BinaryConverter(2);
		testConv.randomInput()
	});

	test.todo('Forward Propogation with RELU');
	// testLayer = new Layer(2, 3, 'relu');
	// testLayer.forwardPropogation(testConv.inputActivation);
	
	test.todo('Forward Propogation with Sigmoid');
	// testLayer = new Layer(2, 3, 'sigmoid');
	// testLayer.forwardPropogation(testConv.inputActivation);
	
	test.todo('Forward Propogation with identity function');
	// testLayer = new Layer(2, 3, 'identity');
	// testLayer.forwardPropogation(testConv.inputActivation);
		

});

