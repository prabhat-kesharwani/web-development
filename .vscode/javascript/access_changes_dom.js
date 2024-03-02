// access attribute
let para=document.querySelector("p");
console.log(para.getAttribute("id"));

console.log(para.setAttribute("id","main"));

para.style.backgroundColor="red"
para.style.fontSize="20px";

//**************important***************** */
//insert element and display  text method 
let list=document.createElement("button");
list.innerText="choose one";

let p=document.querySelector("p");
// after ,before,prepend we can append it 
p.append(list);

let new_heading=document.createElement("header");
new_heading.innerText="hey I am learning javascript";

document.querySelector("body").prepend(new_heading);
new_heading.style.color="black";
new_heading.style.fontSize="30px";

//delete and attribute
let accessing =document.querySelector("ul");
accessing.remove();







