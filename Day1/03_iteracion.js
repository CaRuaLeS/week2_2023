const aData = [1, 2, 3, 4, 5];
const userName = 'Pepe';

console.log(aData[1]);
console.log(userName[2]);

aData[1] = 56;
console.log(aData[1]);
userName[2] = 'b';
console.log(userName[2]);

Object.freeze(aData);
