// creating object with the help of class
//****important  */
// class creation class and constructor
 class toyotacar{
     constructor(mileage){
        this.mileage= mileage;
        console.log("the mileage is ", mileage);
     }

     start(){
        console.log("the car will start");
     }
     stop(){
        console.log("the car will stop")
     }
     setbrand(brand){
        this.brand=brand;
        console.log("this is ",brand);
     }
 }
 // object making using abover class

 let fortuner=new toyotacar(12);
 fortuner.setbrand("fortuner");
 let glanza=new toyotacar(23);
 glanza.setbrand("glanza");


//  step-2 creating constructor