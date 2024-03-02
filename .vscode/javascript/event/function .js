//function in js 
// Method 1

function first(name){
console.log(name);
}
first("prabhat");

//sum of two number
function sum(a,b){
console.log("the sum of the numbers is ", a+b);
}

function mul(a,b){
    console.log("the multiply of the numbers is ", a*b);
    }

sum(2,3);
mul(4,5);
//**************important************** 
// method-2(arrow function)

const myclass=(a)=>{
    console.log("The square of the number" , a*a);
}
myclass(34);

//question 1
function vowels_count(word){
    word =word.toLowerCase();
    let count=0;
   for( let x=0; x< word.length; x++){
    if ((word[x]=="a") || (word[x]=="e") || (word[x]=="i") || (word[x]=="o") || (word[x]=="u")){
        count=count+1;
    }
    
   }
   return count;
}
console.log(vowels_count("prabhat"));

const vowels_counts2=(word)=>{
    word =word.toLowerCase();
    let count=0;
    for( let x=0; x< word.length; x++){
     if ((word[x]=="a") || (word[x]=="e") || (word[x]=="i") || (word[x]=="o") || (word[x]=="u")){
         count=count+1;
     }
     
}
console.log(count);
}
// *******important  method**********
// higher order method 
//method 2 for each function
let arrays=["delhi","mumbai","uttar pradesh"];

arrays.forEach(function myfun(val){
    console.log(val);
});

//by using arrow function
let arrays1=[12,34,456,687];

arrays1.forEach((vals)=>{
console.log("the square of the number is " ,vals*vals)
});