console.log('Hello from activationFunctions.test.js');

console.log(activationFunctionList);

let result;
let testVector = [-2, -1, 0, 1, 2];
testVector = math.matrix(testVector);
let testMatrix = math.matrix([testVector, testVector]);

result = activationFunctionList['sigmoid'].gx(testVector);
console.log(result);
result = activationFunctionList['sigmoid'].dg_dx(testVector);
console.log(result);

result = activationFunctionList['relu'].gx(testMatrix);
console.log(result);
result = activationFunctionList['relu'].dg_dx(testMatrix);
console.log(result);

result = activationFunctionList['identity'].gx(testMatrix);
console.log(result);
result = activationFunctionList['identity'].dg_dx(testMatrix);
console.log(result);
