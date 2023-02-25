const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne,...numbersTwo];

console.log(numbersCombined);

const {a ,...others} = {a: 1, b: 2 , c: 3 , d : 4};
console.log(others);


