console.log('Hello from nnetwork.test.js');

let testConv = new BinaryConverter(2);
let nodeCounts = [testConv._inputDigits, 3, testConv._outputDigits];
let afns = ['identity', 'relu', 'identity'];

let testNNetwork = new NNetwork(nodeCounts, afns, 0.1);

console.log(testConv.randomInput());
console.log(testNNetwork.forwardPropogation(testConv.inputActivation));
console.log(testNNetwork.backPropogation(testConv.inputActivation, testConv.outputActivation));

console.log(testConv.randomInput());
console.log(testNNetwork.forwardPropogation(testConv.inputActivation));
console.log(testNNetwork.backPropogation(testConv.inputActivation, testConv.outputActivation));

testNNetwork.gradientDescent();