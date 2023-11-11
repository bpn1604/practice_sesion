//LONGEST Increasing Subsequence
//let arr2 =[10, -22, 9, 33, 21, 50, 50, 50, 50]
let arr2 =[10, 5, 6, 3, 8, 20]
let count = 1
let maxNum = arr2[0]
 for(let i=1;i<arr2.length;i++){

    if(maxNum<arr2[i]){
        count++
        maxNum=arr2[i]
    }
    else{
        maxNum = arr2[i]
    }
 }
 console.log(count)


//MAXIMUM SUM
// let arr =[-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let currSum = 0
// let maxSum = -Infinity
// for(let i=0;i<   arr.length;i++){
//     currSum = Math.max(currSum+arr[i],arr[i])
//     maxSum= Math.max(currSum,maxSum)
    
// }
// console.log(maxSum)
// const validator = require('validator')

// console.log(validator.isEmail("efssa"))

// console.log(validator.isURL("www.google.com"))
// let fs = require("fs")

// fs.writeFileSync('note.txt','checking123')

// fs.appendFileSync('note.txt','adding more tezts')