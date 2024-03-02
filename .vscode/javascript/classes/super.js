// super is just to constuctor calling of perent in child

class person{
    constructor(name){
        this.name=name;
        console.log(" i am", name);
    }

    eat(){
        console.log(" they eat");
    }
}

class engineers extends person{
    constructor(name){
  console.log("this is  enter child constructor");
  super(name);
  console.log("this is exit child constructor");
    }
    work(){
        console.log("they run the country and procecss in development");
    }
}

let prabhat=new engineers("prabhat");
