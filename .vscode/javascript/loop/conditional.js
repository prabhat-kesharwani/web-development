let age=22;
if (age>18){
  console.log("you can vote ")

}
else{
    console.log("you are not eligible for vote ")
}

let num=23;
if (num%2==0){
    console.log("number is even  ")
  
  }
  else{
      console.log("number is odd  ")
  }

  let mode="dark";
  let color;
  if (mode=="dark"){
    color="white";
  }
  else{
    color="dark";
  }
  console.log(color)

  let marks =23;
  if(marks<33){
    console.log("you failed ")
  }
  else if(marks>90 ){
    console.log("you are passed with A grade")
  }
  else if(marks>80 && marks<90){
    console.log("you are passed with B grade")
  }
  else if(marks>70 && marks<80){
    console.log("you are passed with C grade")
  }
  else if(marks>60 && marks<70){
    console.log("you are passed with D grade")
  }
  else if(marks>33 && marks<80){
    console.log("you are passed with C grade")
  }
  else{
    console.log("you are passed ")
  }
  //ternary opertor takes three things 
  let ages =23;
 let result =age%3==0 ? "yes ,it is divisible by 3" :"no ,it is not  divisible by 3";
console.log(result)
// use of prompt function
let numbers=55;
// let numbers =prompt("enter the number");
 let ans =numbers%5==0 ? "yes ,it is multiple by 5" :"no ,it is not  multiple by 5";
console.log(ans)

//printing the 100 even number 
let n=100;
for (let i=1; i<=n;i++){
  if(i%2==0){
    console.log(i+" ");
  }  
}
let computer_number=23;
let user_namer=prompt("Guess the number ")
while(computer_number!=user_namer){
  user_namer= prompt("you enterted wrong number ! guess again")
}
console.log("congralations! you guess the right number")
// 