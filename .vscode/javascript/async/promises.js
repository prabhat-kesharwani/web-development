
// promises in javascript*****imp**** creation of promises

// let promise=new Promise((resolve,reject)=>{
//     console.log("order placed successfully ");
//     reject("order  not deliverd successfully");
// });

// function getdata(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success");
//         if(getnextdata){
//             getnextdata();
//         }  
//     },9000);
// });
// }

const prom=()=>{
    return new Promise((resolve,reject)=>{
     console.log("order placed !");
     resolve("successfully");
    });
}
let promt=prom();
promt.then((res)=>{
   console.log("order delivered",res);
});
promt.catch(()=>{
    console.log("order not  delivered");
});