///////////// Vectors
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(anotherVector) {
	return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
};

Vector.prototype.minus = function(anotherVector) {
	return new Vector(this.x - anotherVector.x, this.y - anotherVector.y);
};

Object.defineProperty(Vector.prototype, 'length', {
	get: function() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) }
});