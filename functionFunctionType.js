// Function() declaration
 
// Syntax
//  function name(params) {
// /codes/
// return
// }
// console.log(name(args))
    
// function sum(a,b) {
//   return a+b
    
// }
// console.log(sum(1,3))


//  function Expression 

// Syntax
    //  function name(){

    //  }
//    const varName=function name (params){
// / codes /
// return
// }
// console.log(varName(args))


// const calc=function sum(a,b) {
//   return a+b
    
// }
// console.log(calc(1,3))

// Anonymous Function
// (function have'nt name)

// const varName=function(params){
// return / Code /
// }
// console.log(varName(args))

// Arrow Function()

// Syntax
// const varName = (params) =>/ Code /
// console.log(VarName(args))

// const varName = (a,b) =>a+b
// console.log(varName(1,5))  //6

// Unary funtion 
//(only one parameter have arrow function,in this case no need to write brackets() )

// Syntax
// const varName = one params => / code /
// console.log(varName(args))

// const double = n => n*2
// console.log(double(5)) //10

//we have mmultiple codes in arrow function use {/ codes /}
//  Syntax
// const varName = (params) =>{
//     / codes /
//     return 
// }
// console.log(varName(args))

// const multyProgram = (a,b) =>{
//    let add= a+b
   
//     return add

    
// }
// console.log(multyProgram(10,5))  //15

//Pure function

// let num=10
// function sum(a,b){
//     return a+b+num

// }
// console.log(sum(1,2)) //13

// here the arguments are not changed but the output is changed
//this case is unpure

//default Parameter

// function sum (a,b=10){
//     return a+b
// }
// console.log(sum(5))  //15

// function sum(a,b=4){
//     return a+b
// }
// console.log(sum(3,5))  // 8 - override the b=4 to b=5

//RECURSION
//(funtion call itself)

// function countDown(n){
// if (n===0){
//     console.log("Go")

//     return 
// }

// console.log(n)  // 3,2,1,Go
// countDown(n-1)

// }
// countDown(3)


//REST Operator
//Rest Parameter syntax  (...params)

// function sum(...nums){
//     console.log(nums)
// }
// sum(1,2,3,4,5,6,7,8,9)  // [ 1,2,3,4,5,6,7,8,9 ]

// function sum(a,...rest){
//     console.log(a,rest)
// }
// sum("saneesh",1,2,3,4,5,6,7,8,9) // saneesh [ 1,2,3,4,5,6,7,8,9 ]

