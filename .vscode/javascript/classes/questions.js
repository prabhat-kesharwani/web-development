class userdetails{
    constructor(name,email){
       this.name=name;
       this.email=email;
    }
    viewdata(){
        console.log("the data is secured you can't access only admin");
    }
}
class teacher extends userdetails{
    viewdata(){
        console.log("you can view data but can't change it only admin");
    }
}

class admin extends userdetails{
    constructor(name,email){
        super(name,email);
    }
    viewdata(){
        console.log("you can view data you can change also ");
    }
    editdta(){
        console.log("you ara able to change data ");
    }
};

let ram=new userdetails("ram","ram223@gmail.com");
let kakoli=new teacher("kakoli","kakoli123@gmail.com");
let admin1=new admin("admin1","admin1@gmail.com");


/// try and catch method 