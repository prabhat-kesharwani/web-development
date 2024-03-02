let getpromise=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("data :",data);
    resolve("got value");
},2000);
    // reject("reject value");
    });
};
// this is promises chain step-1

// console.log("fetching data 1......");
// let p1=getpromise(1);
// p1.then(()=>{
//     console.log("fetching data 2......");
//     let p2=getpromise(2);
//     p2.then(()=>{

//     });
// });


// step-2
// console.log("fetching data 1.....");
getpromise(123)
.then((res)=>{
    return getpromise(456);
}).then((res)=>{
console.log(res)
})
