// normal string
let full_name='prabhat kesharwani';
console.log(full_name);

//template literals 
//it is the very easy to printing of the object
let sen=`this pen is made of india `;
console.log(sen);
let pen={
    company:"Doms",
    price:30,
    mfg_date:"5 jan 2023"

};

console.log("this is the pen of ", pen.company,"company whose price is ",pen.price,"and manufactur in ",pen.mfg_date);
// (string interpolation)this can be write by using template litreals
let result=`this is the pen of ${pen.company} mcompany whose price is ${pen.price} and manufactur in ${pen.mfg_date}s`;
console.log(result);

