//DATA TYPES(8)
//(7)Primitive and (1)non-primitive datatapes


//*7 primitive datatypes

//1*string

// const courseName ="python"

//2*number

// const price =1000

//3*boolean

// const isAvailable = false

//javascript is case sensitive
//eg:
// const a=10
// const A=30

// console.log(A,a)
// console.log(a,A)

//4*undefined

// let rating;
// console.log (rating)

//5*null


// let rating=null
// console.log(rating)

//6*bigint

//BigInt is a primitive data type in JavaScript used to represent integers larger than the maximum safe limit of the Number type

//7*symbol

//Symbol is a primitive data type introduced in ES6.
// It is used to create unique and immutable identifiers, even if they have the same description.

//*non-primitive datatypes


//*object

//stored collection of data

// const course={
//     courseName:"js",
//     price:1000,
//     isAvailable:false,
    

// }
// console.log(course)

//op  - {courseName:"js",price:1000,isAvailable:false}


//unorder object


// const course={
//     courseName:"js",
//     price:1000,
//     isAvailable:false,
//     123:33443

// }
// console.log(course)

//op -  { '123': 33443, courseName: 'js', price: 1000, isAvailable: false }

//? how to order a unordered object using Array

// const languages =["Malayalam","English","Tamil"]

//console.log(languages[0])


//in js has stored any datatypes
//eg: 
// const array=["string",1000,12003.444]
// console.log(array)