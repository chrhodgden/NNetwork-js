const BinaryConverter = require('../../src/binaryConverter');
const Layer = require('../../src/layer');
const math = require('mathjs');

describe('Test Layer module', () => {

    let testLayer = new Layer(2, 3, 'relu');
    let testConv = new BinaryConverter(2);
    
    testConv.randomInput()
    testLayer.forwardPropogation(testConv.inputActivation);
    
    testLayer = new Layer(2, 3, 'sigmoid');
    testLayer.forwardPropogation(testConv.inputActivation);
    
    testLayer = new Layer(2, 3, 'identity');
    testLayer.forwardPropogation(testConv.inputActivation);
        
    test.todo('Layer Tests');

});

