//code hoisting: using variables before declaration of variables which results to variables being undefined

function tipper(a){
    var bill = 5;
    console.log(bill + parseInt(a));
}
tipper("78");

bigTipper(900);


var bigTipper = function (a){
    var bill = 5;
    console.log(bill + parseInt(a));
}