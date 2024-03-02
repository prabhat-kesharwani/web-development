let userscore=0;
let compscore=0;
let msgcall=document.querySelector("#msg");
let chang=document.querySelector("#userscore");
let chang1=document.querySelector("#compscore");
let rstbtn=document.querySelector("#rstbtn");
// step-1 
let choices=document.querySelectorAll(".pic");
choices.forEach((choice)=>{
   const userchoice=choice.getAttribute("id")
   choice.addEventListener("click",()=>{
    playgame(userchoice);
   })
});
// step-2 it will print the value only
const playgame=(userchoice)=>{
    console.log("userchoice = ",userchoice);
    let compuchoice=gentcompu();
    console.log("compuchoice = ", compuchoice);

    //step-4 logic writing
 if(userchoice===compuchoice){
    //draw game
    drawgame();
 }
 else{
     let userwin=true;
    if(userchoice==="rock"){
        userwin=compuchoice==="paper" ?false:true;
    }
    else if(userchoice==="paper"){
        userwin=compuchoice==="scissor" ?false:true;
    }
    else{
        //user=scissor compu=//rock,paper
        userwin=compuchoice==="rock" ?false:true;
    }
    showwinner(userwin);
 }
};

//step-3 it will return the random value 
const gentcompu=()=>{
    const options=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3); // floor used for integer value 
    return options[randomidx];
};

//step-5 showwinner builing
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win!");
        msgcall.innerHTML="You Win!";
        msgcall.style.backgroundColor="green";
        userscore=userscore+1;
        user_score(userscore);
    }
    else{
        console.log("you lose!");
        msgcall.innerHTML="You Lose!";
        msgcall.style.backgroundColor="red";
        compscore=compscore+1;
        comp_score(compscore);
    }
};

const drawgame=()=>{
    console.log("game was draw !" );
    msgcall.innerHTML="game drawn play again !";
    msgcall.style.backgroundColor="rgb(5, 7, 15)";
}
const user_score=(userscore)=>{
    chang.innerHTML=userscore;
}
const comp_score=(compscore)=>{
    chang1.innerHTML=compscore;
}

//reset case
rstbtn.addEventListener("click",()=>{
    console.log("restart");
      userscore=0;
      compscore=0;
      chang.innerHTML=userscore;
      chang1.innerHTML=compscore;
      msgcall.innerHTML="Pick You Move";
      msgcall.style.backgroundColor="rgb(5, 7, 15)";
});