// var x,y,restof;
// [x,y,...restof]=[0,2,30,40,50,60];
//  console.log(x);
//  console.log(y);
//  console.log(...restof);
//  let records = ["aashish", "ram","shyam"];
//  records.forEach((display)=>{
//      console.log(display)
//  })
//class- it is a collection of objects
//object- it is any real world entity is called as object.
//eg:pen,laptop,phone
//constructor- r used to initialise the object.
//there is no nead to call constructor, it will 
//automatically invoked at the time of object creation
// class car 
// {
//     speed:number;
//     constructor()
//     {
//         this.speed=20;
//     }
//     cspeed()
//     {
//         console.log("the speed of the car is"+this.speed);
//     }
//     acc()
//     {
//         this.speed+=50;
//     }
// }
// let obj = new car;
// obj.cspeed();
// obj.acc();
// obj.cspeed();
//inheritense- it is mechanism in which one class 
//acquires all the properties and behaviour of another class
//A-parent class or super class or base class
//b- child classor derived class or sub class
// syntex-
//class A
//{
//}
//class B extends A
//{
//}
// class xyz
// {
//     abc()
//     {
//         console.log("aashish");
//     }
// }
// class inher extends xyz{
//     bca()
//     {
//         console.log("react js");
//     }
// }
// let s= new inher;
// s.abc();
// s.bca();
// class car 
//  {
//      speed:number;
//      constructor()
//      {
//          this.speed=20;
//      }
//      cspeed()
//      {
//          console.log("the speed of the car is"+this.speed);
//      }
//      acc()
//      {
//          this.speed+=50;
//      }
//  }
//  class bike extends car{
//      tires()
//      {
//          console.log("apache")
//      }
//     }
//  let obj = new car;
//  obj.cspeed();
//  obj.acc();
//  obj.cspeed();
// obj.tires();
// class car
// {
//     speed:number;
//     constructor()
//     {
//         this.speed=20;
//     }
//     cspeed()
//     {
//         console.log("The speed of the Car is"+this.speed);
//     }
//     acc()
//     {
//         this.speed+=50;
//     }
// }
// class bike extends car{
// tires()
// {
//     console.log("Apache");
// }
// }
// let obj=new bike;
// obj.cspeed();
// obj.acc();
// obj.cspeed();
// obj.tires();
//interface is a blue print of a class.
//interface must have abstract method.
//property of abstract method is it has no body it will terminate
//with the help of semi colin.
//interface is uesd to achieve fully abstraction
// we can provide the body who the extract method in child class
//syntex
//interface car
// {
//    cDetails();
// }
// class B implements car{
// }
// interface car
// {
//    cDetails();
// }
// class B implements car{
// cDetails() {
//     console.log("color is black");
// }
// }
// let obj = new B;
// obj.cDetails();
// promise is an object that return a value which we hope to receive in the future but not now
// promise providesus a consuming code  and productive code.
// so the value will be returned by the promisein the future.
// promise has three states 
// 1)pending
// 2)fullfill
// 3)rejected
// Rejected- suppose that the promise to complete in react js by  next month
//but we dont know if we will spend time to react js untill next mont
//we can either be complete learning or not
//pending state we dont know if we will compete react js by the nxt month
//fullfill state-in fullfill state the complete leaning react js in next month
// Rejected- we dont learn react js
//to create promise we nead create promise contructor
//step- we have to pass a function inside that promise with arguments
// that function called as exeutor 
// executor accept two functions 
// resolve 
//reject
var completed = true;
var record = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("React Js");
    }
    else {
        reject("not completed");
    }
});
console.log("record");
