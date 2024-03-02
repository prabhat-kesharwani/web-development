
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// Step-1 to add all country name in drop down
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromcurr=document.querySelector(".from select");
const Tocurr=document.querySelector(".To select");
const msg=document.querySelector(".msg");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
    if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected"
        }
     else if(select.name==="To" && currCode==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption);
    }
    //step-2 change flag
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });

}
// step-4 change flag conditon
const updateflag=(element)=>{
    let councode=element.value;
    let countrycode=countryList[councode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
   img.src=newsrc;
};


//step-4 button function to accept value
btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
    
    const URL= `${BASE_URL}/${fromcurr.value.toLowerCase()}/${Tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[Tocurr.value.toLowerCase()];
    let finalAmount=amtval * rate;
   msg.innerText=`${amtval} ${fromcurr.value}= ${finalAmount} ${Tocurr.value}`;
});
