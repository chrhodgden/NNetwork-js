console.log('Hello from demo.js');

let v0 = [];
let v1 = [1, 2, 3, 4];
let v2 = [5, 6, 7, 8];

v0 = [v1, v2]

v0 = math.matrix(v0);
v1 = math.matrix(v1);
v2 = math.matrix(v2);

v1 = math.transpose(v1);
v2 = math.transpose(v2);

let v3 = math.concat(v1, v2, 0);

console.log(v3);
