let btn=document.querySelector("#batu");
btn.onclick=(eve)=>{
    console.log("click succesful!");
    // alert("once submit you cannot able to change details  ");
    console.log(eve.type);
    console.log(eve.target);
    console.log(eve.clientX);
    console.log(eve.clientY);
}
let btn1=document.querySelector("#batu2");
btn1.ondblclick=()=>{
    console.log("form filled successful");
    
}
let box=document.querySelector("div");
box.onmouseover=()=>{
  console.log("you are inside box");
}
// event handler 
//let btn=document.querySelector("#batu");
btn.addEventListener("click",(eve)=>{
console.log("submitted succesfully");
console.log(eve.target);

})

// event remove

 btn.removeEventListener("click",hander);