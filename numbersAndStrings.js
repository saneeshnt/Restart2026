//.toString()

// const value=5
// console.log(value.toString())
//op = 5 ,datatype is string

// console.log(value.toString(2))
//op = 101 converted to binary

//.tofixed()

// const value=2.3+2.4
// console.log(value)
//op = 4.69999999999.....

// console.log(value.toFixed())
//op = 5 fixit the floating 4.6999... to  int 5

// console.log(value.toFixed(1))
//op = 4.7 fixit the floating 4.6999... to floating 4.7

// console.log(value.toFixed(2))
//op = 4.70 

// console.log(value.toFixed(3))
//op = 4.700


// here some predefined words output
// console.log(1/0) 
// op = infinity
// console.log(1/"saneesh") 
// op = NaN  (Not a Number)
// console.log(-1/0) 
// op = infinity
// console.log(typeof NaN) 
// op = number

//isNaN()
//isNaN() - ==


// console.log(isNaN("saneesh"))
// op = true

// console.log(isNaN(""))
// op = true here empty string is converted to 0

// console.log(NaN==NaN)
// op = false

// console.log(isNaN({}))
// op = true ,object({}) is Not a Number (NaN)

//Number.isNaN() - ===

// console.log(Number.isNaN(123))
// op = false
//Number.isNaN() only returns true if the value is actually NaN (Not-a-Number).

// 123 is a valid number

// It is not NaN

// So the result is false

// console.log(Number.isNaN({}))
// op = false ,checked the datatype also

// console.log(Number.isNaN("saneesh"))
// op = false ("saneesh" = string)


// Number.isNaN(NaN)        // true ✅
// Number.isNaN(123)        // false
// Number.isNaN("123")      // false
// Number.isNaN("abc")      // false
// Number.isNaN(undefined)  // false



// String

// mainly 3 type 

// ('',"",``)

// const single ='saneesh'
// const double= "anju"
// const backtick=`get married`

// const result=single + ' and ' + double
// const result=`i'am ${single} and my girl is ${double} `

// console.log(result)


// length of String

// const name ="saneesh"

// console.log(name.length)  //=7

// letter picking (charAt())



// const result=name.charAt(0)
// console.log( result)  //s


//letter picking in (array[])


// const result=name[0]
// console.log( result)   //s

// in case, empty string (charAt())

// const name=""
// const result="hi"+name.charAt(0)
// console.log(result)   //hi

// in case, empty string (array[])


// const name=""
// const result="hi "+name[0]
// console.log(result)   //hi undefined

// small string  to upper string (.toUpperCase)

// const name="saneesh"
// const result=name.toUpperCase()
// console.log(result)  //SANEESH

// only first letter
// const result=name.charAt(0).toUpperCase()
// console.log(result)  //S

// .slice()

// const name="saneesh"
// const result=name.slice(1)
// console.log(result)  //aneesh

// const name="saneesh"
// const result=name.slice(2)
// console.log(result) //neesh

// writing first letter to uppercase and the rest of letters in Normal

// const name="saneesh"
// const result=name.charAt(0).toUpperCase()+name.slice(1)
// console.log(result) //Saneesh

// .slice  More ...

// const name = "JavaScript"
// const result=name.slice(0)  //  JavaScript
// const result=name.slice(0,4)   //Java
//  const result=name.slice(4)    //Script

//in minus(-) case,

// const result=name.slice(-6)    //Script
// const result=name.slice(-10)      //JavaScript
// const result=name.slice(-10,-6)     //java
// console.log(result) 

// substring()

// const name= "java"
// const result=name.substring(4,1)  //ava
// const result=name.substring(4,0)  //java
// const result=name.substring(4,3)  //a
// const result=name.substring(4)  //(empty)
// const result=name.substring(1)  //ava
// const result=name.substring(0)  //java
// console.log(result)
