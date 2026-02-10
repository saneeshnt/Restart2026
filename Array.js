// console.log(saneesh)  //saneesh is not defined

// let saneesh;
// console.log(saneesh)  // undefined   -- declared but not assigned

// Coercion
// changing one datatype to another

// Boolean
// let value = true;
// if(value){
//     console.log(true)   

//     }else{
//        console.log (false)
//     }                                     //true

//    let value = false;
// if(value){
//     console.log(true)   

//     }else{
//        console.log (false)
//     }                                    //false

// in js , null , NaN , undefined , "" , 0 , 0n are falsy datatypes

// in array [] case,non-premitive

// let value = [];
// if(value){
//     console.log(true)   

//     }else{
//        console.log (false)
//     }                                    //true   

//////// Array[] /////////

// const numbers=[10,20,30,40]
// console.log(numbers)                     //[10,20,30,40]
// console.log(numbers[0])                  //10
// console.log(numbers[numbers.length-1])   //40
// console.log(numbers.at(0))               //10
// console.log(numbers.at(3))               //40
// console.log(numbers.at(-1))              //40   first element of last
// console.log(numbers.at(-4))              //10

// numbers[100]=900
// console.log(numbers)                        //[10,20,30,40,<96 empty items>,900]


//////// ANOTHER TYPE OF ARRAY /////////////
// const numbers=new Array(100,200)
// console.log(numbers)                       //[100,200]

// Disadvantage
// const numbers=new Array(2)
// console.log(numbers)                         //[<2 empty items>]

// Array Update
// const numbers = [200,400]
// numbers[0]=300
// console.log(numbers)                            //[300,400]

 ////////// C R U D (Create,Read,Update,Delete) //////////

// Push()
// const numbers = [30,40,50]
// const result=
// numbers.push(60)   //push  60 to last element                            
// console.log(result,numbers)                       //4 [30,40,50,60] ,4 is the total elements 

// Pop()
// const numbers = [30,40,50]
// const result=
// numbers.pop()   //removing last element                               
// console.log(result,numbers)                            //50 [30,40] , 50 is deleted

// shift()
// const numbers = [30,40,50]
// const result=
// numbers.shift()    //remove the first element of the array                   
// console.log(result,numbers)                        //30 [40,50] ,30 is the first element of the array

// unshift()
// const numbers = [30,40,50]
// const result=
// numbers.unshift(10,20)   //add elememts one or more to first index of the array                                 
// console.log(result,numbers)                         //5 [10,20,30,40,50] ,5 is the length of the array

// slice() =>[)
    // const numbers =[111,222,333,444,555]
    // const result=numbers.slice(1,3)                  //sliced the 222 and 333 
    // console.log(result,numbers)                      //[222,333]  ,[111,222,333,444,555,] ,without change the original  array

    //   const numbers =[111,222,333,444,555]
    // const result=numbers.slice(3)                 
    // console.log(result,numbers)                    //[444,555][111,222,333,444,555]

// splice()
// const numbers =[11,22,33,44,55]
// const results=numbers.splice(0,1)
// console.log(results,numbers)                          //[11][22,33,44,55] ,sliced 11 from the array with change the original array    

// splice() (remove,add, update,replace)

// const numbers=[23,33,43,53]
// const results=numbers.splice (1)     //first args is where to start ,splice (1)=>[33,43,53]
// console.log(results,numbers)                               //[33,43,53][23]       ,[23] is the return value 


// const numbers=[23,33,43,53]
// const results=numbers.splice (1,0)     // 2nd args is How many elements should we remove
// console.log(results,numbers)                                 //[][23,33,43,53] 

// const numbers=[23,33,43,53]
// const results=numbers.splice (0,2)
// console.log(results,numbers)                                   //[23,33][43,53]


// const numbers=[13,33,43,53]
// const results=numbers.splice (0,1,23)   //since 3rd args add elements towards the first removed position
// console.log(results,numbers)                                     //[13][23,33,43,53]

// const numbers=[23,33,43,53]
// const results=numbers.splice (1,3,24,25,26)
// console.log(results,numbers)                                        //[33,43,53][23.24,25,26]

// Elements show one by one

// const numbers=[1,3,4,5,6,7]
// for(let i=0;i<numbers.length;i++){
//     const value=numbers[i]
//     console.log(value)
// }                                                       //1
                                                        //2
                                                        //3
                                                        //4
                                                        //5
                                                        //6
                                                        //7
 
// for Of()
                                                        
// const numbers =[11,22,33,44,55]
// for (value of numbers){
//     console.log(value)                                   
//     }                                                   //11
                                                        //22
                                                        //33
                                                        //44
                                                        //55