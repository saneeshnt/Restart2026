// difference b/w primitive and non primitive


//mutable and immutable
//in primitive

// let courseName="js"
//     courseName[0]="k"
// console.log(courseName)


//op  -  js
//immutable

//in non-primitive

// const languages=['malayalam','tamil']
//     languages[0]='english'
// console.log(languages[0])

//op  -  english

//here we changed the value of 0th position
//mutable

//in primitive

// let num1=10
// let num2 =10
// if(num1==num2){
//     console.log("equal")
// }else{
//     console.log("not equal")
//}
    


//op  -  equal

//in non-primitive

// const user1={name:"saneesh"}
// const user2={name:"saneesh"}

// if (user1==user2){
//     console.log("equal")
// }else{
//     console.log("not eqaul")
// }

//op  - not eqaul
//here values of user1 and user2 are same("saneesh"), but the memory-positons of user1 and user2 are different

// const user1={name:"saneesh"}
// const user2={name:"saneesh"}
// if(user1.name==user2.name){
//     console.log("true")
// }else{
//     console.log("false")
// }

//in primitve - stored by value

//let num1=10
//let num2=num1   //here num2 stored the value of num1 (10)
//num2=20         //here num2 changed the value 10 to 20 
 

// if(num1==num2){
//     console.log("true")
// }else{
//     console.log("false")
//}

//op  -  false

//in non-primitive - stored by reference

// const user1={name:"saneesh"}
// const user2=user1   //here user2 stored the refernce of user1 
    

//    user2.name="subin"  //here user2 changed the name 'saneesh' to 'subin'
//    if(user1==user2){
//     console.log("true")
//    }else{
//     console.log("false")
//    }

//    op  - true
//because,  reference of user1 and user2 are same


//  const user1={name:"saneesh"}
//  const user2=user1  //user2 stored reference of user1
//  user2.name="subin" //changed the value od user2

//  console.log(user1,user2)

 //op  - {name:"subin"}{name:"subin"}
 //here reference of user1 and user2 are same therefore we changed the value user2 it  changed user1 also

