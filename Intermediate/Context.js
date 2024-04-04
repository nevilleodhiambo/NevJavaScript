
//Global and Executable Context
// sayHello();

// function sayHello(){
//     console.log("Hello World");
// }

if(2==2){
    console.log('This is a true statement');
}
console.log(this);

var game = "Basketball";

function myGame(){
    var name = "Neville";
    console.log(this);
}
myGame();