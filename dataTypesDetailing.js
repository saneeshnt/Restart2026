//DATA TYPES DETAILING (METHODS AND PROPERTIES)
//NUMBERS AND STRINGS

// const value=10
// // console.log(value)  //   10
// console.log(typeof value)  //   number

// const value=1000000000
//for easy typing
// const value=1e9
// console.log(value)  //  1000000000

//MAX_SAFE_INTEGER

// const value=Number.MAX_SAFE_INTEGER
// console.log(value)  //  9007199254740991
// console.log(value+1) // 9007199254740992
// console.log(value+2) // 9007199254740992

//9007199254740991 is the javascript presize max value for handle on "number" datatype
//this number is called MAX_SAFE_INTEGER

//bigint datatype

//we want to add largest numbers in javascript program ,use bigint datatype

//const value = (largest number)n

//n => is defined bigint
//bigint datatypes onlyo concluding integers
//not work in float

//ROUNDING 

// const value=2.4
//Rounding 2.4 to nearest lowest integer 2
//using Method() - Math.floor()

// const result=Math.floor(value)
// console.log(result)  // 2


//Rounding 2.4 to nearest largest integer
//using method() - Math.ceil()


// const result=Math.ceil(value)
// console.log(result) //3

//Rounding 2.4 in dafault , 
//Number is lower than .5 is rounded to the  nearest lowest integer , Number is larger than .5 is rounded to the nearest largest integer
//using Method() - Math.round()


// const value=2.4
// const result=Math.round(value)
// console.log(result) // 2


// const value=2.5
// const result=Math.round(value)
// console.log(result) // 3

// const value=2.6
// const result=Math.round(value)
// console.log(result) // 3


//how to convert 2.66 to 2.7  (in matheamatic logic)
//2.66*10
//Math.round(2.66*10)
//Math.round(2.66*10)/10

// const value=2.66
// const result=Math.round(2.66*10)/10
// console.log(result) //2.7

//solve this problem in one method()
//using method() - toFixed(1)

// const value=2.66
// const result=value.toFixed(1)
// console.log(result)  //  2.7
// console.log(typeof result)  //string

//here the result is string 

// const value=2.66
// const result=value.toFixed(1)
// console.log(result+3) //  2.73  ("string"+3)


// Create a Random Number
// console.log(Math.random()) //after run this code  each time has each output b/w zero and one [0,1]
//[0,1) means zero included to the result but not one

// const value=Math.random()
// console.log(value) //  any number b/w 0 and 1 [0,1)

// const value=Math.random()*6
// console.log(value) //  any number b/w 0 and 6 [0,6)


// using Math.floor() in Math.random()
// trap value using Math.floor()

// const value=Math.random()*6
// console.log(Math.floor(value)) // any integer number b/w 0 to 5 (1/2/3/4/5), [0,5]

//  const value=Math.random()*6
//  console.log(Math.floor(value)+1)  //any integer number b/w 0 and 1 (1/2/3/4/5/6) [0,6]   or.......


// const value=Math.random()*7
//  console.log(Math.floor(value)) // any integer number b/w 0 and 1 (1/2/3/4/5/6) [0,6]

// these two programs like dies 