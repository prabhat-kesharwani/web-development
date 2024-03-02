const classes={
    student1:function(){
        console.log("this is student profile");
    }
}

// these are the object
const samar={
    name:"samar shah",
};
let samridh={
    name:"smaridh yadav",
};
let shashwat={
    name:"noida wale ",
};
let aniket={
    name:"yadav ji jhnsi",
};

//creating the prototype of classes above using proto method you can access classes in samar
samar.__proto__=classes;
samridh.__proto__=classes;
shashwat.__proto__=classes;
aniket.__proto__=classes;