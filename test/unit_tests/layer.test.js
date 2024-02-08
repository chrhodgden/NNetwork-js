console.log('Hello from layer.test.js');

let testLayer = new Layer(2, 3, 'relu');
let testConv = new BinaryConverter(2);

console.log(testLayer);
console.log(testConv.randomInput());

console.log(testLayer.forwardPropogation(testConv.inputActivation));

testLayer = new Layer(2, 3, 'sigmoid');
console.log(testLayer.forwardPropogation(testConv.inputActivation));

testLayer = new Layer(2, 3, 'identity');
console.log(testLayer.forwardPropogation(testConv.inputActivation));
