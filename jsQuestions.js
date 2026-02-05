// // PALINDROME in while loop


// function isPalindrome(str){
//     // let word=str.toLowerCase()
//     let word=str.toUpperCase()

//     let fisrtIndex=0
//     let lastIndex=word.length-1
//     while(fisrtIndex<lastIndex){
//         if(word[fisrtIndex]!==word[lastIndex]){
//             return false
//         }
//         fisrtIndex++
//         lastIndex--

//     }
//     return true
// }
// console.log(isPalindrome("saneesh"))
// console.log(isPalindrome("Malayalam"))
// console.log(isPalindrome("malayalam"))
// console.log(isPalindrome("MaLaYalAm"))

////PALINDROME in for loop

// function isPalindrome(str){
// let word=str.toLowerCase()
// let fisrtIndex
// let lastIndex=word.length-1
//     for(fisrtIndex=0;fisrtIndex<lastIndex;fisrtIndex++,lastIndex--){
//          if(word[fisrtIndex]!==word[lastIndex]){
//             return false
//          }
//     }
//     return true
    
    

// }
// console.log(isPalindrome("saneesh"))
// console.log(isPalindrome("MalayalaM"))



////COUNT OF VOWELS in a String in for  loop

// function countVowels(str){

// let vowels=str.toLowerCase()
// count=0
// for(let i=0;i<vowels.length;i++){
//     if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//         count++
//     }
// }
//  return count
// }
// console.log(countVowels("saneesh"))


////COUNT OF VOWELS in a String in while  loop

// function countVowels(str)
// {
//     let vowels=str.toLowerCase()
//     let count=0
//     let i=0
//     while(i<vowels.length){
//         if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//             count++
//         }
//            i++
//     }
//     return count
// }
// console.log(countVowels("saneesh"))


