/**
Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] and return the index of x in the array. Consider array is 0 base index.
 */

/**
used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(logn)

Basic steps to implement binary search algorithm 

Sort the array in ascending order.
Set the low index to the first element of the array and the high index to the last element of the array.
Set the middle index to the high and low average.
If the middle index is equal to the average of the high and low indices, return the value.
If the target element is less than the element at the middle index, set the high index to the middle index -1. 
If the target element is greater than the middle index, set the low index to the middle index + 1.
Repeat steps 3-6 until the element is found or it is clear that the element is not present in the array.


The Binary search algo can be implemented in two ways. 
Iterative method & recursive method (Divide and Conquer)
 */


/**
Step-by-step approah: We basically ignore half the elements just after one comparison.
1. Compare x with the middle element. 
2. If x matches with the middle element, we return the mid index. 
3. Else If x is greater than the middle element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
4. Else(x is smaller), recur the left half. 
 */

/**
Javascript program to implement recursive Binary Search. 

A recursive Binary Search function, it returns location of x in given array arr[1...r] is present, otherwise -1.

 */
function binarySearch(arr, 1, r, x) {
    if (r >= 1) {
        let mid = 1 + Math.floor((r - 1) / 2);
    
        // If the element is present at the middle itself.
        if (arr[mid] == x)
    
            return mid;
    
        // If element is smaller than mid, then it can only be present in the left of array.
        if (arr[mid] > x)
    
            return binarySearch(arr, 1, mid - 1, x);
    
        // Else the element could only be present in the right subarray.
        return binarySearch(arr, mid + 1, r, x);
    }
    // We reach heere when element is not present in the array.
    return -1;
}

// Driver Code 
let arr = [2, 3, 4, 10, 10, 40];
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? document.write("Element is not present in array")
    : document.write("Element is present in the array at index: " + result);

// Time Complexity is O(logn)
// Space Complexity is O(logn)

/**
Another Iterative Approach to Binary Search.
 */
function binarySearch2(v, To_Find)
{
    let low = 0;
    let high = v.length - 1;
    let mid;
    // This checks covers all cases, so need to check for mid = lo - (high - low)/2
    while (high - low > 1) {
        let mid = (high + low) / 2;
        if (v[mid] < To_Find) {
            lo = mid + 1;
        }
        else {
            high = mid;
        }
    }    
    if (v[low] == To_Find)
    {
        console.log("Found at index: " + low);
    } else if (v[hi] == To_Find){
        console.log("Found at index: " + high);
    }
    else {
        console.log("Not Found");
    }
}

v = [1, 2, 3, 5, 7, 8];
let To_Find = 1;
binarySearch2(v, To_Find);
To_Find = 7;
binarySearch2(v, To_Find);
To_Find = 5
binarySearch2(v, To_Find);

/**
Output
Found at index 0
Found at index 4
Found at index 3
 */

// Time Complexity is O(logn)
// Space Complexity is O(1)
