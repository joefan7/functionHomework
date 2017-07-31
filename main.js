// 1. Write a function which takes an array of numbers and returns the mode of that array.
// [2, 4, 4, 4, 6, 6, 1] - > 4
// [0, 0, 0, 10] -> 0
// [1] -> 1
var findMode = function(inArray){
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    for (let number of inArray){ // loop to iterate through each inArray element
        numMapping[number] = (numMapping[number] || 0) + 1 // dynamically create object key-value pairs number-counts        
        console.log(numMapping)
        if (greatestFreq < numMapping[number]) { // calculate the current mode after each iteration of the for-of loop
            greatestFreq = numMapping[number]
            mode = number; // populate mode with the highest frequency key
        }
    }
    return mode;
}
console.log(findMode([2, 4, 4, 4, 6, 6, 1]))
console.log(findMode([0, 0, 0, 10]))
console.log(findMode([1]))

// 2. Write a funciton which, given a year as a number, returns whether that number is a leap year.
// 2000 -> true
// 1900 -> false
// 2016 -> true
// Leap year identification rules (wikipedia)
// if (year is not divisible by 4) then (it is a common year)
// else if (year is not divisible by 100) then (it is a leap year)
// else if (year is not divisible by 400) then (it is a common year)
// else (it is a leap year)
var leap = function(inYear){
    if (inYear % 4 > 0){
        return false
    } else {
        if (inYear % 100 > 0) {
            return true
        } else {
            if (inYear % 400 > 0) {
                return false  
            } else {
                return true
            }
        }
    }
}
console.log(leap(2000))
console.log(leap(1900))
console.log(leap(2016))

// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1
var firstInt = function(inArray){
    var searchInt = 1
    var intFound = false 
    while (intFound === false){
        if (inArray.indexOf(searchInt) === -1){
            intFound = true
        } else {
            searchInt += 1
        }
    } return searchInt
}
console.log(firstInt([1,2,5]))
console.log(firstInt([1,2,3,4,5]))
console.log(firstInt([3,4,5]))

// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]
var deDupeArray = function(inArray){
    var uniqueArray = inArray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
})
return uniqueArray
}
console.log(deDupeArray([1,1,2,3,1,2,3]))
console.log(deDupeArray([1,4,4,4,2,2,4,4,4]))

// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".
var engToPig = function(inString){
    // Transform individual word
    var pigWord = function pigWord(inWord){ 
        var inWordAsArray = inWord.split('') // splits the word into array of letters
        inWordAsArray.push(inWordAsArray[0]) // adds the first letter to the end of the array
        inWordAsArray.push('ay') // adds 'ay' to the end of the array
        inWordAsArray.shift() // removes the first letter
        return (inWordAsArray.join('')) // joins the array into a string
    } 
    // Upcase first word of sentence
    var upCaseFirst = function upCaseFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    var inStringAsArray = inString.toLowerCase().split(' ')
    for ( i=0 ; i < inStringAsArray.length ; i++){
        inStringAsArray[i] = pigWord(inStringAsArray[i])
    }
    return upCaseFirst(inStringAsArray.join(' '))
}

var pigToEng = function(inString){
    // Transform individual word
    var pigWord = function pigWord(inWord){ 
        var inWordAsArray = inWord.split('') // splits the word into array of letters
        inWordAsArray.unshift(inWordAsArray[inWordAsArray.length-3]) // puts the third from last letter onto front of word
        inWordAsArray.splice(inWordAsArray.length-3, 3) // removes last three letters
        return (inWordAsArray.join('')) // joins the array into a string
    } 
    // Upcase first word of sentence
    var upCaseFirst = function upCaseFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    var inStringAsArray = inString.toLowerCase().split(' ')
    for ( i=0 ; i < inStringAsArray.length ; i++){
        inStringAsArray[i] = pigWord(inStringAsArray[i])
    }
    return upCaseFirst(inStringAsArray.join(' '))
}
console.log(engToPig('The quick brown fox'))
console.log(pigToEng('Hetay uickqay rownbay oxfay'))

// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
var arrayCompare = function(arrArg1, arrArg2){
    var arr1Sorted = arrArg1.sort()
    var arr2Sorted = arrArg2.sort()
    if (arr1Sorted.join() === arr2Sorted.join()){
        return true 
    } else {
        return false
    }
}
console.log(arrayCompare([], []))
console.log(arrayCompare([2, 3, 4], [1, 2, 3]))
console.log(arrayCompare(["a", "c", "b"], ["a", "b", "c"]))
console.log(arrayCompare([1, 1, 1], [1, 1, 1, 1]))

// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
var maxCutoff = function(arrayIn, cutoffValue){
    var newArray = []
    var newArrayValue 
    for (i=0 ; i < arrayIn.length ; i++){
        if (arrayIn[i] > cutoffValue) {
            newArrayValue = cutoffValue
        } else {
            newArrayValue = arrayIn[i]
        }
        newArray.push(newArrayValue)
    }
    return newArray
}
console.log(maxCutoff([1,2,3,4,5,6,7,8], 4))
console.log(maxCutoff([1,5,7,3,1,5,7], 3))

// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
var rndGen = function(min,max){
    var outArray = []
    var itemCount = 0
    var newRndNum = 0
    while (itemCount < 10){
        newRndNum = parseInt(Math.random() * (max - min) + min)
        if (outArray.indexOf(newRndNum) === -1){
            outArray.push(newRndNum)
            itemCount += 1
        } 
    }
    return outArray.sort()
}
console.log(rndGen(1,100))

// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
var mergeSort = function(arr1, arr2){
    var newArray = arr1.concat(arr2)
    newArray.sort(function(numberA, numberB){
        if ( numberA > numberB ) {
            return 1
        } else if ( numberA < numberB ) {
            return -1
        } else if ( numberA === numberB ){
            return 0
        }
    })
    return newArray
}
console.log(mergeSort([], []))
console.log(mergeSort([1,2,5,6,9], [3,4,5,10]))
console.log(mergeSort([-1, 0, 1], [-2, 2]))

// 10. Write a function which, given an array, determines the subarray with the largest sum.
// [1, 1, 1, -1] -> [1, 1, 1]
// [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// [2, 2, -10, 5, -10, 2, 2] -> [5]
// [1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]
function maxSubArray(inArray) {
    var maxEndsHere = 0,
        maxSoFar = 0,
        maxArrayTracker = [],
        largestSubArray = []
    
    inArray.forEach(function(el) { 
        maxEndsHere = Math.max(0,maxEndsHere + el)
        if (maxEndsHere > 0) {
            maxArrayTracker.push(el)
        } else {
            maxArrayTracker.length = 0
        }
        
        maxSoFar = Math.max(maxSoFar, maxEndsHere)
        if (maxSoFar === maxEndsHere) {
            largestSubArray = maxArrayTracker.slice(0)
        }
    })
    
    return largestSubArray
}
console.log(maxSubArray([1, 1, 1, -1]))
console.log(maxSubArray([1, 5, -4, 3, 2, -3]))
console.log(maxSubArray([2, 2, -10, 5, -10, 2, 2]))
console.log(maxSubArray([1, 3, -4, 5, 7, 9]))

// 11. One way of encoding a message is called a "square code". Given a message like:
// "Have a nice day!"
// We determine an appropriate size of a square or rectangle to contain this message without spaces like so:
// have
// anic
// eday
// !
// We then read the square in columns, which gives us our encoded message:
// hae! and via ecy
// Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.
var encodeSquare = function(inString){
    var encodedArray = []
    var splitArray = []
    var vertWord = ''
    var jLength = 0
    var iLength = 0
    var tempArray = []

    // based on the length of the string determine the dimensions of the grid
    var findDimensions = function(inLength){
        if ( Math.sqrt(inLength) % 1 === 0){
            outLength = Math.sqrt(inLength)
            // console.log('outLength1 ' + outLength)
            return outLength
        } else {
            outLength = Math.trunc(Math.sqrt(inLength) + 1)
            // console.log('outLength2 ' + outLength)
            return outLength    
        }
    }

    // function to split string into array
    var splitNChars = function (txt, num) {
        var arrayResult = [];
        for (var i = 0; i < txt.length; i += num) {
            arrayResult.push(txt.substr(i, num))
        }
    return arrayResult;
    }

    // down case string
    lcString = inString.toLowerCase()
    // transform inString into string without spaces
    noSpaces = lcString.replace(/ /g,'')
    // send string without spaces to findDimensions function
    jLength = findDimensions(noSpaces.length)
    iLength = jLength  
    splitArray = splitNChars(noSpaces,iLength)
    // create new array entries by looping through above array letter by letter of each element pivoting [j][i]
    for ( var i = 0 ; i < iLength ; i++){
        for ( var j = 0 ; j < jLength ; j++){ 
            if (splitArray[j][i] !== undefined){
                vertWord = vertWord + splitArray[j][i]    
            }
        }
        encodedArray.push(vertWord)
        vertWord = ''
    }
    return encodedArray.join(' ')
}
console.log(encodeSquare('Have a nice day!'))

var decodeSquare = function(inString){
    var newArray = []
    var vertWord = ''
    var iLength = 0
    var jLength = 0
    
    // based on the length of the string determine the dimensions of the grid
    var findDimensions = function(inLength){
        if ( Math.sqrt(inLength) % 1 === 0){
            outLength = Math.sqrt(inLength)
            return outLength
        } else {
            outLength = Math.trunc(Math.sqrt(inLength) + 1)
            return outLength    
        }
    }
    
    // split string into array
    newArray = inString.split(" ")
    // get charCount of inString
    charCount = inString.replace(/ /g,'').length
    // find grid dimensions
    iLength = findDimensions(charCount)
    jLength = iLength
    // loop through pivot of newArray
    for (i=0 ; i < iLength ; i++){
        for (j=0 ; j < jLength ; j++){
            if (newArray[j][i] != undefined){
                vertWord = vertWord + newArray[j][i]
            }
        } 
    } return vertWord
}
console.log(decodeSquare('hae! and via ecy'))

// 12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

// Example output:
// th 2.37%
// in 2.20%
// fj 2.00%
// ...