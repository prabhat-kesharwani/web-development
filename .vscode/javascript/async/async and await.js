// Async and await function
let getpromise=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :", data);
            resolve("printed");
        },2000);
    });
};

// await function work inside only sync function
// async function getdata(){
//     console.log("getting the first 1......");
//     await getpromise(1);
//     console.log("getting the first 2......");
//     await getpromise(2);
//     console.log("getting the first 3......");
//     await getpromise(3);
// }

//iife(immediately invoked function execution)
(async function (){
    console.log("getting the first 1......");
    await getpromise(1);
    console.log("getting the first 2......");
    await getpromise(2);
    console.log("getting the first 3......");
    await getpromise(3);
})();