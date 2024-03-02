//higher order method 
let list=23;
function solve(list){
    if (list%2==0){
        list=list+2;
        }
        else{
            list=list-2;
        }
        console.log(list);
}
function ans (solve){
    return solve;
}


//1- Map function (it will print the answer in mew array)
let l=[23,35,67,84];
let new_arr=l.map((vals)=>{
   return Math.sqrt(vals);
});
console.log(new_arr)

//2-filter function(it will remove the array acc to condition)
let l1=[23,35,67,84];
let arr=l1.filter((val)=>{
    return val%2==0;
});
console.log(arr)

//3-reduce function(operation perform single value answer)
// Q-1 sum fo the array
l1=[23,35,67,84];
let answer=l1.reduce((previous,current)=>{
    return previous+current;
});

// find the larget elment of the array
console.log(answer);
let maximum=l1.reduce((pre,cur)=>{
    return pre>cur ? pre:cur;
});
console.log(maximum);

