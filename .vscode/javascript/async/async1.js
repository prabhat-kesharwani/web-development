//async programming it will not wait the previous function  to execute 
console.log("one"); 
console.log("two"); // these execute but below  take time 
setTimeout(()=>{
     console.log("hello");
},4000);
console.log("three");  //this will excute and the above  execute
console.log("four");


//callback function  
function sum(a,b){
    console.log(a+b);
}
// this sum call in other function
function another(a,b,sum){
    sum(a,b);
}
another(23,23,sum);