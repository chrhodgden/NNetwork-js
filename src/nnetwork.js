const math = require('mathjs');
const Layer = require('./layer');

class NNetwork {
	constructor(nodeCounts, activationFunctionNames, learningRate) {
		this.learningRate = learningRate;
		this.layers = [];
		for (let i = 1; i < nodeCounts.length; i++) {
			this.layers.push(new Layer(nodeCounts[i-1], nodeCounts[i], activationFunctionNames[i]));
		};
	}
	forwardPropogation(activationInput) {
		let ao = activationInput;		
		this.layers.forEach(layer => {
			ao = layer.forwardPropogation(ao);
		});
		return ao;
	}
	backPropogation(activationInput, targetOutput) {
		let ao = this.forwardPropogation(activationInput);
		let cost = math.subtract(ao, targetOutput);
		let dc_da = math.multiply(cost, 2);
		cost = math.map(cost, element => element ** 2);
		cost = math.sum(cost)
		this.layers.reverse().forEach(layer => {
			dc_da = layer.backPropogation(dc_da);
		});
		this.layers.reverse()
		return cost;
	}
	gradientDescent() {
		this.layers.reverse().forEach(layer => {
			layer.gradientDescent(this.learningRate);
		});
		this.layers.reverse()
	}
};

module.exports = NNetwork;