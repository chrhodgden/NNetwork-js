console.log('Hello from activationFunctions.js');

let sigmoidExpression = '1 / (1 + exp(-x))';
let dSigmoidExpression = math.derivative(sigmoidExpression, 'x');

sigmoidExpression = math.compile(sigmoidExpression);
dSigmoidExpression = dSigmoidExpression.toString();
dSigmoidExpression = math.compile(dSigmoidExpression);

const sigmoid = function(xValue) {
	return sigmoidExpression.evaluate({x: xValue});
};

const dSigmoid_dx = function(xValue) {
	return dSigmoidExpression.evaluate({x: xValue});
};

const relu = function(x) {
	return x * (x > 0);
};

const dRelu_dx = function(x) {
	return Number(x > 0);
};

const identity = function(x) {
	return x;
};

const dIdentity_dx = function(x) {
	return 1;
};

const matrixMethod = function(elementMethod) {
	const method = function(matrix) {
		return math.map(matrix, (element) => elementMethod(element));
	};
	return method;
};

activationFunctionList = {
	'relu': {
		gx: matrixMethod(relu),
		dg_dx: matrixMethod(dRelu_dx)
	},
	'sigmoid': {
		gx: matrixMethod(sigmoid),
		dg_dx: matrixMethod(dSigmoid_dx)
	},
	'identity': {
		gx: matrixMethod(identity),
		dg_dx: matrixMethod(dIdentity_dx)
	}
};