let newArray=[1,2,3,4];
let squareArray=newArray.map((num)=> num*num); //map is a function used to do mathmatical operations
console.log(squareArray);

let evenNumbers=[1,2,3,4,5];
let filteredEvenNumbers=evenNumbers.filter((num)=> num%2===0); //filter is a function
console.log(filteredEvenNumbers);

let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);