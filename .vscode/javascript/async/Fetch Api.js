const URL = "https://cat-fact.herokuapp.com/facts";
    
  
 const getdata= async()=>{
    console.log("gettting the dta....");
    let response= await fetch(URL);
    console.log(response);
    let data= await response.json();
    para.innerHTML=data[0].text;
 };
let button=document.querySelector("#btn");
let para=document.querySelector("#para");
button.addEventListener("click",()=>{
    getdata();
});
