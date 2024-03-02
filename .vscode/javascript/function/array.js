// arrays are object and mutable
let cities=["Himachal Pradesh","Uttar pradesh","delhi","shimala"];
console.log(cities);
//for of function
for ( city of cities){
    console.log(city.toLowerCase());
  
}
// question:1
let avg=0;
let marks=[23,56,78,12,89,90];
for(i of marks){
    avg=avg+i;
}
console.log("the average is ",avg/marks.length);
//questions: 2
let originalPrice=[540,234,6570,890,435];
let j=0;
for(let price of originalPrice){
   originalPrice[j]=(price-(10*price)/100);
   j=j+1;
}
for (let main of originalPrice){
   console.log(main);
}


