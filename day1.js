//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive(arr){
    for (x in len(arr)){
        if (array[x]+1!=array[x+1]){
            return x
        }
        else if(array[x]+1==array[x+1]) {
            x++
        }
        else {
            return -1
        }
    }

}
   

//Call function here with arguments




//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 30
Explain: 10 + 12 + 3 + 15 = 30

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 21

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here
let sumPositives = Input => {
    let total = 0
    for (let num of Input){
        if (num>=0){
            total += num
        }
    }
    return max
} 

// Call function here with arguments
