// inhertance from one class to other 
class person{
    eat(){
        console.log(" they eat");
    }

    sleep(){
        console.log(" they sleep");
    }
   wear(){
    console.log("they wear");
   }
    work(){
        console.log("do nothing");
    }
};

class engineers extends person{
   
    work(){
        console.log("they run the country and procecss in development");
    }
}

class doctors extends person{
   
    work(){
        console.log("they treat and save the people from diseases");
    }
}
   
class politician extends person{
  
    work(){
        console.log("they passes the bill for people");
    }
}

// now creating object 
let prabhat=new engineers();

//*******method overriding******** */
// if we call prabhat.work() so it will show object work not person because it is most nearest ans easy t
//to find so this is called method overridding;