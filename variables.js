// courseName="pyhton"
// console.log(courseName)

//  dont declair keyword to  a variable
//  courseName="python"
// function getData()
// {
//     courseName="js"
// }
// getData()
// console.log(courseName)
//output  -- js

//declair the keyowrd "var" to a variable in outerfunction,and the data of innerfunction is changed
//  var courseName="python"
//  function getData(){
//     courseName="js"
//  }
//  getData()
//  console.log(courseName)

//output -- js

//declair the keyword var to innerfunnction only
//    courseName="python"
//  function getData(){
//      var courseName="js"
//  }
//  getData()
//  console.log(courseName)

//output -- python

// var add to both variables

//  var courseName="python"
//  function getData(){
//    var  courseName="js"
//  }
//  getData()
//  console.log(courseName)

// output -- python

"useStrict";
// KEYWORDS

//differnce b/w var , let and const

//REDECLARATION

//*var

// var courseName="python"
// var courseName="js"
// console.log(courseName)

// op  -  js
//*Redeclaration is possible

//* let

// let courseName ="python"
// let courseName="js"
// console.log(courseName)

// op  -  SyntaxError : Identifier "courseName" has already been deaclared
//*declaration is not possible in let

//*const

// const courseName="python"
// const courseName="js"
// console.log(courseName)

// op  -  SyntaxError : Identifier "courseName" has already been deaclared
//*declaration is not possible in const

//*REASSIGNMENT

//var and let

// var name="js"
//     name="python"

//     console.log(name)

// op  -   "python"
//Reassignment is possible in var

//  let name= "js"
//     name ="Python"
//     console.log(name)

// op  -   "python"
//Reassignment is possible in let

//const

// const name = "js";
//       name = "python";
// console.log(name);


// op  - Type error
// //Reassignment is not possible in const

