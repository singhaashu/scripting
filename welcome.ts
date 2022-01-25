// let fruits:string[]=["mango","grapes","guava"];

// console.log(fruits[0]);
// console.log(fruits[1]);
//for(let i=0; i<fruits.length; i++){
    //console.log(fruits[i]);
//}
//destructuring - allow us to unpack value from ARRAYS:

// var x,y;

// [x,y]=[10,20];

// console.log(x);
// console.log(y);

//rest parameter and spread operator

// spread operator
// the spread operator is a new eddition  to the set of operator in ES6 
// its takes an iterable that is array and expended into indivisual element
// var x,y,restof;
// [x,y,...restof]=[0,2,30,40,50,60];
//  console.log(x);
//  console.log(y);
//  console.log(...restof);

// var a,b,restof;
// [a,b,...restof]=["ram", "shyam","aashish"];
// console.log(a);
// console.log(b);
// console.log(...restof);

// var x,y,restof;
// ({x ,y,...restof}= { x:10 , y:50 ,z: 50 ,r: 555 } );
// console.log(x);
// console.log(y);
// console.log(restof);

//helpers
//map method

// it is similar to the forach method ,it executes the provided function once 
// for each element in an array
// the map method iterates over a given array and return the result

//  let array = [1,2,3];
//  array= array.map((items)=>
//  {
//      return items*2;
//  });

// console.log(array);

//forEach method - executes a provided function once for each element in an array.
// after executing the function for every element then this method changes the value of existing array element
//according to the result by a providing function.

// let records = ["gaurav","aashish","raj"];

// records.forEach(display);
// function display(item)
// {
// console.log(item);
// }

// practise session-ES6
//control statement-if statement,if else, if else if
//loops-for, while loop,do while
//helper-filter
//arrow function

// export{};
// let numbers = [1,2,3,4,5];
// let x=10;

// function add(ele){
//     return ele*x;
// }
// let result= numbers.map(add);
//     console.log(result);

   let ary =[11,4,9,16];
    let  ary1 = ary.map((test)=>{
          return test*10;
      });
    console.log(ary1);

     
    // var ary = [11,49,5,10];
    //  var b = ary.map((test)=>{
    //     return test+2;
    // });
    //  console.log(b);

   
    // let number = [1,2,3,4,5,6,7,8];
    // let result = number.filter((ele) => ele %2 !==0);
    // console.log(result);

    // let numbers = [1,2,3,4,5,6,7,8,9];
    // for(let ele in numbers){
    //     console.log(numbers[ele]);
    // }

    // let arr1 =[1,2,3,4,5];
    // let arr2 = [6,7,8,9];

    // let result = [...arr1,...arr2];
    // console.log(result);

    // let obj1 = {
    //     name:"aashish",
    //     age: 23,
    //     dob:18111997,
    // };
    // let {name} = obj1;

