var user = {
    firstName : "Neville",
    lastName : "Odhiambo",
    age: 34,
    learn : function(){
        console.log("line 6", this);
        function sayHello(){
            console.log("line 8", this);
        }
        sayHello();
    },
}
user.learn();