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
        console.log(newArr)
        return newArr
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
            </Segment>
         )
    }
}
 
export default ThirtyDayChallenge;