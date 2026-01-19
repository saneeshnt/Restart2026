//automatic type conversion

// let a = "10"
// let b =10
// console.log(a==b)

//op  -- true
// here a="10 " is a string and b = 10 is an integer then why is this true ?
//how to know  type of this values


//using Strict equal to (===)

// let a = "10"
// let b =10
// console.log(a===b)

//op  -- false
//because type of the values are different

// JS operators

// assignment operator (=,+=,-=,*=,/=,%=,**=)
//a=b
//additional operator  +
//a+b
//multiplication operator
//a*b
//comparison operator(==,===,!=,!===,>,<,>=,<=)
//Logical operators
//logical OR (||)
//Logical AND (&&)
//Logical NOT (!)


//Logical OR

// let a =30
// let b =0
// console.log(a||b) //op  -- 30

// let a =0
// let b =30
// console.log(a||b) //op  -- 30

// let a =0
// let b =0
// console.log(a||b) //op  -- 0

// let a =30
// let b =30
// console.log(a||b) //op  -- 30

// let a =0
// let b =30
// console.log(a||b) //op  -- 30

// let a =23
// let b =34
// console.log(a||b) //op  -- 23

// Logical AND

// let a =10
// let b =20
// console.log(a&&b) //op  -- 20

// let a =20
// let b =10
// console.log(a&&b) //op  -- 10

// let a =0
// let b =0
// console.log(a&&b) //op  -- 0

// let a =0
// let b =20
// console.log(a&&b) //op  -- 0

// let a =10
// let b =0
// console.log(a&&b) //op  -- 0

//Logical NOT

// let a =10
// let b=20
// console.log(!a) //false
// console.log(!b) //false

// let a =0
// let b=20
// console.log(!a) //true
// console.log(!b) //false

// let a =10
// let b =0
// console.log(!a)  //false
// console.log(!b)  //true
 

// let a =0
// let b=0
// console.log(!a)  //true
// console.log(!b)  //true

// Date Creation in JS

// let a =new Date(1947,8,15)
// console.log(a) // op  -- 1947-09-14
//here month and day is changed cause of array

// let a=new Date(1947,7,15)
// console.log(a)  // op -- 1947-08-14
//here month changed

// let a=new Date(1947,7,15)
//  console.log(a.toString()) // op -- Fri Aug 15 1947
//the correct date

// instanceof Date

// let a=new Date()

// instanceof Date //true
// instanceof Object //true

// const indDay=new Date(1947,7,15)
// console.log(indDay instanceof Date)  // op  -- true

//BROWSER FEATURES

//Alert

alert("welcome") 

alert("error"+404)
alert("Sorry about the error ")

//prompt

prompt("Please Enter Your Name")
prompt("Are You Sure?","yes")
const result=prompt("Are you Adult","yes")
alert(result)

//confirm

const conformation=confirm("Are you sure for confirm this?")
alert (conformation)