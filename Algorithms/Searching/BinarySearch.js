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


/**
Iterative approach to Binary Search

A Iterative binary search function. It returns the location of x in given array[1...r] if present, otherwise return -1.
 */
function binarySearch3(arr, x)
{
let start = 0;
let r = arr.length - 1;
let mid;
    while (r > start) {
        mid = start + Math.floor((r - 1) / 2);
        // if the element is present at the mid itself.
        if (arr[mid] == x) 
            // console.log("Element located at index: " + mid);
            return mid;
        // If the element is smaller than mid, then it can only be present on the right subarray.
        if (arr[mid] > x)
            r = mid - 1;
        // Else the element is present on the right subarray.
        else
            start = mid + 1
    }
    // We hit here if the element is not present in the array.
    return -1;
}

arr = new Array(1, 2, 3, 4, 50);
x = 4;
n = arr.length;
result = binarySearch3(arr, x);

(result == -1) ? document.write("Element is not present in the array")
    : document.write("Element is found at index: " + result);

/**
Advantages of Binary Search:

1. Binary search is faster than linear search, especially for larger arrays. As the size of the array increases, the time to perform a linear seach increases linearly, while the time it takes to perform a binary search increases logarithmically.

2. " " is more efficient than other searching algorithms that have a similar time complexity, such as interpolation search or exponential search 

3. " " is relatively simple to implement and easy to understand, making it a good choice for many applications. 

4. " " can be used on both sorted arrays and sorted linked lists, making it a flexible algorithm.

5. " " is well-suited for searching large datasets that are stored in external memory, such as on hard drive or in the cloud.

6. " " can be used as a building block for more complex algorithms, such as those used in computer graphics and machine learning.

 */

/**
Drawbacks of Binary Search: 

1. We require the array to be sorted. If the array is not sorted, we must first sort it before performing the search. This adds an additional O(n log n ) time complexity for the sorting step, which can make binary search less efficient for very small arrays.

2. " " requires that the array being searched in contiguous memory locations. This could be a problem if the array is too large to fit in memory, or if the array is stored on external memory such as a hardrive or in the cloud.

3. " " requires that the elements of the array be comparable, meaning that they must be able to be ordered. This can be a probem if the elements of the array are not naturally ordered, or if the ordering is not well defined. 

4. " " can be less efficient than other algorithms, such as hash tables, for searching very large datasets that do not fit in memory.

 */

/**
Applications of Binary Search 

1. Searching in machine learning. " " can be used as a building block for more complex algorithms used in machine learning. Such as algorithms for training neural networks or finding the optimal hyperparameters for a model.

2. Commonly used in Competitive Programming,

3. Can be used for searching in computer graphics. " " can be used as a building block for more complex algorithms used in computer graphics, such as algorithms for ray tracing or texture mapping. 

4. Can be used for searching a database, " " can be used to efficiently seach as database of records, such as a customer database, or a product catalog.

*/

/**
When to use Binary Search 

1. When searching a large daatabase as it has a time complexity of O(n logn).

2. When the dataset is sorted.

3. When data is stored in contiguous memory

4. Data does not have a complex structure or relationships.


 */

/**
Summary
1. " " is an efficient algorithm for finding an element within a sorted array.

2. Time complexity O(n logn). 

3. One if the draw backs if " " is that the array must be sorted. 

4. Useful algorithm for building more complex algorithms in machine learning and computer graphics.
 */