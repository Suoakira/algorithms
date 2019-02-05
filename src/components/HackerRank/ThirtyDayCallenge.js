import React, { Component } from 'react'
import { Segment, Header } from "semantic-ui-react"

class ThirtyDayChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    sumAll = (arr) => {
        arr = (arr[0] >= arr[arr.length - 1]) ? arr.reverse() : arr
        let total = 0
        for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
            total += i
        }
        return total += arr[arr.length - 1]
    }

    // sumAll = (arr) => {
    // // Buckle up everything to one!

    // // Using ES6 arrow function (one-liner)
    // let sortedArr = arr.sort((a, b) => a - b);
    // let firstNum = arr[0];
    // let lastNum = arr[1];
    // // Using Arithmetic Progression summing formula

    // let sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    // return sum;
    // }

    diffArray(arr1, arr2) {
        let newArr = []
        // Same, same; but different.
        const orderedArrays = (arr1.length >= arr2.length) ? [arr1, arr2] : [arr2, arr1]
        const diffInArrayLength = orderedArrays[0].length - orderedArrays[1].length
        for (let i = 0; i < diffInArrayLength; i++) {
            orderedArrays[1].push(undefined)
        }

        newArr = orderedArrays[0].filter(element => !orderedArrays[1].includes(element))
        newArr.push(orderedArrays[1].filter(element => !orderedArrays[0].includes(element))[0])

        newArr = newArr.filter(element => { return element !== undefined })
        return newArr
    }

    // console.log seems to work with  regular functions, just not arrow syntax
    destroyer(arr) {
    // Remove all the values
        let argLastIndex = (arguments.length - 1)
        // could of just deleated first item which was the array, then assumed rest were numbers to delete
        for (let i = argLastIndex; 0 < i;  i-- ) {
            arr = arr.filter(num => num !== arguments[i])
        }
        return arr

    }


    whatIsInAName(collection, source) {

    }
    



    render() { 
        return ( 
            <Segment>
                <Header>Intermediate Alogorithms </Header>
                <Segment>
                    <div>We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
                        <p>1. sumNumbersInRange: {this.sumAll([1, 4])} <button onClick={() => alert(this.sumAll)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
                        <p>1. diffArray: {this.diffArray([1, "calf", 3, "piglet"], [7, "filly"])} <button onClick={() => alert(this.diffArray)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
                        <p>1. destroyer: {this.destroyer([3, 5, 1, 2, 2], 2, 3, 5)} <button onClick={() => alert(this.destroyer)}>Click to See Function</button></p>
                    </div>
                </Segment>
                <Segment>
                    <div>Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
                        <p>1. whatIsInAName: {this.whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })} <button onClick={() => alert(this.whatIsInAName)}>Click to See Function</button></p>
                    </div>
                </Segment>
            </Segment>
         )
    }
}
 
export default ThirtyDayChallenge;