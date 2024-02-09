const math = require('mathjs');

class BinaryConverter {
	constructor(inputDigits) {
		this._inputDigits = inputDigits;
		let maxActivation = math.ones(this._inputDigits);
		maxActivation = this.convertBinary(maxActivation);
		maxActivation++;
		this._outputDigits = maxActivation;
		this._inputActivation = math.zeros(this._inputDigits);
		this._outputActivation = math.zeros(this._outputDigits);
		this._integer = 0;
		this._outputActivation._data[this._integer] = 1;
	}
	convertBinary(binaryVector) {
		let i = binaryVector._data;
		i = i.join('');
		i = parseInt(i, 2)
		return i;
	}
	convertInteger(inputInteger) {
		let b = inputInteger.toString(2);
		b = b.padStart(this._inputDigits, '0');
		b = b.split('');
		b = b.map(Number);
		b = math.matrix(b);
		return b;
	}
	randomInput() {
		let randomBinaryVector = math.matrix(math.random([this._inputDigits]));
		randomBinaryVector = math.map(randomBinaryVector, (element) => math.floor(element * 2));
		this.inputActivation = randomBinaryVector;
		return randomBinaryVector;		
	}
	set inputActivation(inputVector) {
		this._inputActivation = inputVector;
		this._integer = this.convertBinary(inputVector);
		this._outputActivation = math.zeros(this._outputDigits);	
		this._outputActivation._data[this._integer] = 1;
	}
	get inputActivation() {
		return this._inputActivation;		
	}
	get outputActivation() {
		return this._outputActivation;		
	}
	set integer(inputInteger) {
		this._integer = inputInteger;
		this._inputActivation = this.convertInteger(inputInteger);
		this._outputActivation = math.zeros(this._outputDigits);	
		this._outputActivation._data[this._integer] = 1;
	}
	get integer() {
		return this._integer;		
	}
};

module.exports = BinaryConverter;