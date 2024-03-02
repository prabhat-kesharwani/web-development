// string functions
let full_name= "prabhat kesharwani";
console.log(full_name.length)

//to uppper case
console.log(full_name.toUpperCase());
// to lower case 
console.log(full_name.toLowerCase());
//trim funtion
gap_name="    prabhat kesharwani   ";
console.log(gap_name.trim());
// conacatinatin
l1="prabhat";
l2="prachand";
console.log(l1.concat(l2));
// replace function 
console.log(l1.replace("a","u"));
// slicing method
console.log(l1.slice(2,5));
// finding the element 
console.log(l1.charAt(4));
// string question
let user_name=prompt("enter the full name without space")
let ans=`@${user_name}${user_name.length}`;
console.log(ans);