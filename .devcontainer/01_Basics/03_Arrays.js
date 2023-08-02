// array

const myArr = [1,2,3,4,5]
const myheros = ["shaktiman","superman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);


// myArr.push(6)(it will add no. on last)
// myArr.pop()(it wil remove no. from last)

// myArr.unshift(9)(it will add No. on first)
// myArr.shift()(it will remove Node. from first)
console.log(myArr);

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);