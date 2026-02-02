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






