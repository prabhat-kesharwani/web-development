// DOCUMENT OBJECT MODEL (It created the dom of the page when web page is loaded)
//by using dom we can access our html code with javascript 
//WINDOWS PRESENT IN JAVASCRIPT WHICH CONTAINS DOCUMENT 

console.dir(window.document);
console.log(window.document);
console.log(document.body);

// #Dom manupulation
// class access
let access_class=document.getElementsByClassName("name");
console.log(access_class);

// id access
let access_id=document.getElementById("header");
console.log(access_id);

// tag name
let access_tag=document.getElementsByTagName("button");
console.log(access_tag);

//*******important *********/
//queryselector we can access all
let q_class=document.querySelectorAll(".name");
let q_tag=document.querySelectorAll("button");
let q_id=document.querySelector("#header");
console.dir(q_class);
console.dir(q_id);
console.dir(q_tag); 