names = ["Netflix", "Youtube", "Amazon", "Instagram", "Twitter"];

//for of loop used in array 
// for(var n of names){
//     console.log(n);
// }

const symbols = {
    yt: "YouTube",
    Ig: "Instagram",
    Fb: "Facebook",  
}

//for in normally used in objects 
for(const n in symbols){
    console.log(`key is ${n} value is ${symbols[n]}`);
}