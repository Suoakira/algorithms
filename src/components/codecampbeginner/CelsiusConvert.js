import React, { Component } from 'react'
import { Segment, Header } from "semantic-ui-react"
class FreeCodeCampBeginAlgo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    convertToF = (celsius) => {
        let fahrenheit = (celsius * (9/5)) + 32 
        return fahrenheit
    }

    reverseString = (str) => {
        const copyStr = [...str.split("")]
        let stringLength = copyStr.length
        const reversedArray = [str]
        copyStr.forEach(letter => {
            reversedArray[stringLength -1] = letter
            stringLength -= 1
        } )
        return reversedArray.join("");
    }

    // reverseString = (str) => {
    // let newString = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }
    // return newString;
    // }


    factorialize = (num) => {
        const f = []
            if (num == 0 || num == 1)
                return 1;
            if (f[num] > 0)
                return f[num];
        return f[num] = this.factorialize(num - 1) * num
    }

    findLongestWordLength = (str) => {
        const arrayOfWords = str.split(" ")
        let longestWord = ""

        arrayOfWords.forEach(word => {
        if (word.length > longestWord.length) {
        longestWord = word
            }
        }
        )
        return longestWord.length      
    }

    // this works strictly with the greater than symbol, also it didnt work when i tried to use keys  with forEach thats why i had to use indexOf
    // also wont work with negative
    largestOfFour = (arr) => {
        const largestNumber = [[undefined], [undefined], [undefined], [undefined]]
        arr.forEach( array => 
            array.forEach( number => {
                    if (arr[arr.indexOf(array)][array.indexOf(number)] > largestNumber[arr.indexOf(array)]) {
                        largestNumber[arr.indexOf(array)] = number
                    } 
                }    
            )
        )
        return largestNumber
    }
    // can use endsWith() now

    confirmEnding = (str, target) => {
        let tarLength = target.length
        const strLength = str.length
        let strEndsWith = ""
        let counter = 0
        for (let i = 0; i < tarLength; tarLength--) {
            console.log(tarLength)
            counter += 1
            strEndsWith += str.charAt(strLength - counter)
            console.log(strEndsWith)
        }
        // reverses the string
        strEndsWith = strEndsWith.split("").reverse().join("")
        return (strEndsWith === target) ? true : false
    }

    // pulls out a section os a string str.substring(indexStart[, indexEnd])
    // confirmEnding = (string, target) => {
    // return (string.substr(-target.length) === target) ? true : false;
    // }

    repeatStringNumTimes = (str, num) => {
        let string = ""
        if (num > 0) {
            for (let i = 0; i < num; num--) {
                string += str
            }
        } else {
            return ""
        }
        return string
    }

    // repeast function repeat(times)
    // repeatStringNumTimes = (string, times) =>
    //     times > 0 ? string.repeat(times) : ""

    truncateString = (str, num) => {
        let truncatedString = ""
        if (str.length > num) {
            truncatedString = str.substring(0, num)
            return truncatedString += "..."
        } else {
            return str
        }
    }
    // truncation
    // myTruncatedString = myString.substring(0, length)
    
    findElement = (arr, func) => {
    let num = 0
    num = arr.find(num => func(num) )
    return num;
    }

    // use typeof
    booWho = (bool) => {
        return (typeof bool === 'boolean') ? true : false 
    }

    // remember with this one just that strings are immutable
    titleCase = (str) => {
        str = str.toLowerCase()
        let splitArray = str.split(" ")
        const transformedArray = []
        splitArray.forEach(word => {
            return transformedArray.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
        return transformedArray.join(" ") 
    }
    
    frankenSplice = (arr1, arr2, n) => {  
    // make a new array with a shaddow copy of array 2
    let NewArr = arr2.slice()
    // splices at position n, deletes 0 elements inserts array1
    NewArr.splice(n, 0, ...arr1);
    return NewArr;
}
    // this method converts all values to either a boonlean truthy or falsy
    bouncer = (arr) => {
        const filterTruthys = arr.filter(value => !!value === true )
        return filterTruthys
    }

    getIndexToIns = (arr, num) => {
        // pushs the number into the array, then is able to sort by its index
        arr.push(num)
        arr.sort((a, b) => { return a - b })
        return arr.indexOf(num)
    }


    mutation = (arr) => {
        let test = arr[1].toLowerCase()
        let target = arr[0].toLowerCase()
        for (let i = 0; i < test.length; i++) {
            if (target.indexOf(test[i]) === -1)
                return false
        }
        return true
    }
    



    





    render() { 
        console.log(this.truncateString)
        return ( 
            <Segment> 
                <Header>Basic Alogorithms </Header>
                <Segment>
                    1. Conversion: {this.convertToF(32)}  <button onClick={() => alert(this.convertToF)}>Click to See Function</button>
                </Segment>
                <Segment>
                    2. ReverString: {this.reverseString("hello")} <button onClick={() => alert(this.reverseString)}>Click to See Function</button>
                </Segment>
                <Segment>
                    3. Factorialize: {this.factorialize(5)} <button onClick={() => alert(this.factorialize)}>Click to See Function</button>
                </Segment>
                <Segment>
                    4. LongestString: {this.findLongestWordLength("The quick brown fox jumped over the lazy dog")} <button onClick={() => alert(this.findLongestWordLength)}>Click to See Function</button>
                </Segment>
                <Segment>
                    5. largestOfFour: {this.largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])} <button onClick={() => alert(this.largestOfFour)}>Click to See Function</button>
                </Segment>
                <Segment>
                    6. confirmEnding: {this.confirmEnding("Congratulation", "on")} <button onClick={() => alert(this.confirmEnding)}>Click to See Function</button>
                </Segment>
                <Segment>
                    7. repeatStringNumTimes: {this.repeatStringNumTimes("abc", 3)} <button onClick={() => alert(this.repeatStringNumTimes)}>Click to See Function</button>
                </Segment>
                <Segment>
                    8. truncateString: {this.truncateString("A-tisket a-tasket A green and yellow basket", 8)}  <button onClick={() => alert(this.truncateString)}>Click to See Function</button>
                </Segment>
                <Segment>
                    9. findElement: {this.findElement([1, 2, 3, 4], num => num % 2 === 0)} <button onClick={() => alert(this.findElement)}>Click to See Function</button>
                </Segment>
                <Segment>
                    <div>Check if a value is classified as a boolean primitive. Return true or false.
                        <p>10. booWho: {this.booWho(null)} <button onClick={() => alert(this.booWho)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
                        <p>11. titleCase: {this.titleCase("I'm a little tea pot")} <button onClick={() => alert(this.titleCase)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Use the array methods slice and splice to copy each element of the first array into the second array, in order.
                        <p>12. frankenSplice: {this.frankenSplice([1, 2, 3], [4, 5, 6], 1)} <button onClick={() => alert(this.frankenSplice)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Remove all falsy values from an array.
                        <p>13. bouncer: {this.bouncer([7, "ate", "", false, 9])} <button onClick={() => alert(this.bouncer)}>Click to See Function</button></p>
                    </div>
                </Segment>
                    <Segment>
                    <div>Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
                        <p>14. getIndexToIns: {this.getIndexToIns([5, 3, 20, 3], 5)} <button onClick={() => alert(this.getIndexToIns)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..
                        <p>15. mutation: {this.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])} <button onClick={() => alert(this.mutation)}>Click to See Function</button></p>
                    </div>
                </Segment>

            </Segment>
         )
    }
}
 
export default FreeCodeCampBeginAlgo;