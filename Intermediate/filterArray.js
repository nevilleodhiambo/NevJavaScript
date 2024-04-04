//fill in arrays
var testArray = [2,4, 6 ,3, 9, 5, 8, 1];
console.log(testArray.fill("h", 2, 5));

//filter in arrays
const myNumber  = [21, 22, 23, 24,89, 45, 65, 75];
const result = myNumber.filter((num) => num!=45);
console.log(result);

var users = ['Ted', "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users.slice(1,4));