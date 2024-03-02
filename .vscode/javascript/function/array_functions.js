//arrays functions

// 1-push operation
let arr=["prabhat","samar","samridh","sachin","virat"];
arr.push("ravindra ");
console.log(arr);

//2-pop operation

let result=arr.pop();
console.log(arr);
console.log(result);

//3-to string opertion
console.log(arr.toString());

// 4-concatenation of array
console.log("indian team squards for t20");
let arr1=["rohit sharma","shubham gill","virat kholi","shreyas iyer","surya kumar yadav"];
let arr2=["ravindra jadeda","ravi bisnoyi","jasprit bumrah","mohammad shami","shradual thakur","mohdmad siraj"];
let arr3=["rahul dravid (head coach)","dilip kumar(fielding coach)"];
let arr4=arr1.concat(arr2,arr3);
console.log(arr4);

// unshift operation will add at start 
arr4.unshift("hardrik pandya ");
console.log(arr4)

//shift operation
arr4.shift();
console.log(arr4)

//slice operation
let arr5=arr4.slice(1,4);
console.log(arr5);

//splice operation
arr5.splice(3,2,"rishabh pant","suresh raina");
for (let san of arr5){
console.log(san);
}


