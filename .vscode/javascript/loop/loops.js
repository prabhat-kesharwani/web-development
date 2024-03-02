//for loop ,while and do while loop
let number=prompt("enter the number")
let sum=0;
for(let i=1;i<=number;i++){
   sum= sum+i;
}
console.log(sum)
// for of loop used for string  and arrays iteration
let name ="prabhat"
for (let i of name ){
    console.log(i)
}

//most imp!!(loop used for object)
const profile={
    profileName:"prabhat kesharwani",
    threads_link:"@prabhatkesharwani",
    isfollow:true,
    no_of_posts:78,
    no_of_followers:402,
    profession:"student",
    bio:"JSSATEN NOIDA ",
    quotes:"word hard let your success shout ",

};

for(let val in profile){
    console.log(val)
}
