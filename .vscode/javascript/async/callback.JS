//callback hell amd pyramid of doom (nested callback is known as very complex to umderstand a develo[er])

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }  
    },1000);
}
getdata(1,()=>{
    console.log("getting data 2.....");
    getdata(2,()=>{
        console.log("getting data 3.....");
        getdata(3,()=>{
            console.log("getting data 4.....");
            getdata(4);
        })
    });
});
console.log("finish");
