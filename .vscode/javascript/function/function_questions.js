// Q-1 filter the student marks 90+
let marks=[89,90,99,98,97,96,56,90,56,96];
let new_arr=marks.filter((vals)=>{
    return vals>90;
})
console.log(new_arr);

// Q-2; enter the user Array;
let n=prompt("enter the array length");
l=[];
for(let x=1;x<=n;x++){
    l.push(x);
}
console.log("the given array is ", l);

let sum=l.reduce((prev,curr)=>{
  return prev+curr;
});
console.log("the sum of the array",sum)


let mul=l.reduce((prev,curr)=>{
    return prev*curr;
  });
  console.log("the multiply of the array",mul)