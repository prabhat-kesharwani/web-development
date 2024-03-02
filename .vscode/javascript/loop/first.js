console.log("welcome to india");
 console.log("sachin");
 console.log("age");
//  null value will show it cannot any value
c=null;
console.log(c);
b=undefined;
//it does not know any value 
console.log(b);
full_name="prabhat kesharwani";
age=45;
console.log(full_name);
console.log(age);
var name="sajam";
var name="sachin";

let totalValue=345;
 totalValue=23;
 console.log(totalValue);
 console.log(name);
 const a=234;
 
 console.log(a);
// variavles in javascript
// Number,string ,null ,undefined,BigInt,Symbol,Boolean these are the value come under primitive datatype
// these can be checked by using(typeof name)

//creating object (primitive datatypes ny using  arrays and functions)
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
console.log(profile)
//accessing the object
console.log(profile.no_of_followers)
console.log(profile["profileName"])
console.log(typeof profile["profileName"])