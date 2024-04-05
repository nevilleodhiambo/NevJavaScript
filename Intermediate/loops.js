const myGames = [
    "Basketball",
    "Football",
    "Volleyball",
    1998,
    "rugby",
    "Tennis",
    "Hockey",
];

//using for loop, this loops over each and every item of an array
// for(let i = 0;i <=myGames.length;i++){
//     if(typeof myGames[i] !== "string") continue
//     console.log(myGames[i]);
// }


//while loop


// let i = 0;

// while (i<myGames.length){
//     console.log(myGames[i]);
//     i++;

// }

let i = 0;

do{
    console.log(myGames[i]);
    i++;
}while(i<myGames[i].length);