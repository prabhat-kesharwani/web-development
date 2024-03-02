//question-1
// let h2=document.querySelector("h2");

// h2.innerHTML=h2.innerHTML+"from apna colleage students";
// console.log(h2.innerHTML);

// let boxes=document.querySelectorAll(".box");
// let index=1;
// for( div of boxes){
   
//    div.innerHTML=`my name is ${index}`;
//    index++;
// }

///dom -2 questions
let newbtn=document.createElement("button");
newbtn.innerText="click me!";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);


//q-2
let para=document.querySelector("p");
para.classList.add("newclass");

