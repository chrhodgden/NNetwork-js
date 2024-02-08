console.log('Hello from layer.js');

class Layer {
	constructor(inputCount, nodeCount, activationFunctionName) {
		this.gx = activationFunctionList[activationFunctionName].gx;
		this.dg_dx = activationFunctionList[activationFunctionName].dg_dx;
		this.weights = math.matrix(math.random([inputCount, nodeCount]));
		this.weights = math.map(this.weights, (element) => (element - 0.5) * 2);
		this.biases = math.matrix(math.zeros([nodeCount]));
		this.z = math.matrix(math.zeros([nodeCount]));
		this.dc_dw_vectors = math.matrix(math.zeros(this.weights._size));
		this.dc_db_vectors = math.matrix(math.zeros(this.biases._size));
		console.log('dc_db_vectors', this.dc_db_vectors);
	}
	forwardPropogation(activationInput) {
		this.ai = activationInput;		
		let z = math.multiply(activationInput, this.weights);
		z = math.add(z, this.biases);
		this.z = z;
		let ao = this.gx(z);
		return ao;
	}
	backPropogation(dc_dao) {
		let dao_dz = this.dg_dx(this.z);
		let dc_db = math.dotMultiply(dao_dz, dc_dao);
		let dz_dw = math.ones(this.weights._size);
		dz_dw = math.multiply(this.ai, dz_dw);
		let dc_dw = math.dotMultiply(dc_db, dz_dw);
		let dz_dai = this.weights;
		let dc_dai = math.multiply(dz_dai, dc_db);
		
		//store cost vectors for gradient descent		
		console.log('dc_db_vectors', this.dc_db_vectors);
		console.log('dc_db', dc_db);
		this.dc_db_vectors = math.concat(this.dc_db_vectors, dc_db, 0);
		this.dc_dw_vectors = math.concat(this.dc_dw_vectors, dc_dw, 0);
		console.log('dc_db_vectors', this.dc_db_vectors);
		
		return dc_dai;
	}
	gradientDescent(learningRate) {
		
		console.log(this.dc_dw_vectors);
		console.log(this.dc_db_vectors);
		
		let dc_dw_avg = math.mean(this.dc_dw_vectors, 0)
		let dc_db_avg = math.mean(this.dc_db_vectors, 0)
		this.weights = this.weights - (learningRate * dc_dw_avg);
		this.biases = this.biases - (learningRate * dc_dw_avg);
		this.dc_dw_vectors = math.matrix([]);
		this.dc_db_vectors = math.matrix([]);
	}
};
