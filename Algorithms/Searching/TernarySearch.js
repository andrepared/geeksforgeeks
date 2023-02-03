/**
Why use Ternary Search algorithm ? 

Maximize your seacg capabilities and reduce your time complexity with the intro to ternary search.

It is a decrease ( by constant) and conquer alofirhtm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key ( the searched element) . We divide the array into three parts by taking mid1 and mid2 which can be calculated below. Initially, l and r will be equal or n-1 respectively, where n is the length of the array.

It is the same as binary search but reduces the time complexity a bit more. Its time complexity is O(log n base 3) and that of binary search is (log n base 2). 
 */

// JS program to illustrate the iterative approach to ternary search.
// function to perform Teranary

function ternarySearch(l, r, key, arr)
{
    if (r >= 1) {
        // Find the mid1 and mid2
        let mid1 = l + parseInt((r - 1) / 3, 10);
        let mid2 = r - parseInt((r - 1) / 3, 10);
    
        // check if key is present at any mid
        if (arr[mid1] == key) {
            return mid1;
        }
        if (ar[mid2] == key) {
            return mid2;
        }
        // Since key is not present at mid, chck in which any region it is present then repeat the Search operation in that region.
        if (key < arr[mid1]) {
            // the key lies between 1 and mid1
            return ternarySearch(l, mid1 - 1, key, arr);
        }
        else if (key > arr[mid2]) {
            // the key lies in between mid2 and r
            return ternarySearch(mid2 + 1, r, key, arr);
        }
        else {
            // the key lies in between mid1 and mid2 
            return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
        }
    
    }
    // key not found 
    return -1;
    
}

// Get Array 
// Sort the array if not sorted 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// starting index
l = 0;

//length of array
r = 9;

// checking for 5 

// key to be searched in the array 
key = 5;

// searching the key using ternarySearch
p = ternarySearch(l, r, key, arr);
 
// Print the result 
document.write("Index of " + key + " is " + p + "<br>");

// Checking for 50

// Key to be searched in the Array
key = 50;

// Searching the key using ternarySearch
p = ternarySearch(l, r, key, arr);

// Print the result
document.write("Index of " + key + " is " + p);

// Time Complexity O (log(3) n)
// Memory Complexity  O (log(3) n)

/**
Advantages :

1. Has a time complexity of log base 3, which is more efficient than linear search and comparable to binary search. 

2. Number of comparison get reduced.

3. Works well for large datasets.

4. Fits well with optimization problems. 

5.Ternary Search is a non-recursive algorithm, so it does not require additional memory to store function call stack, this its space efficient.

When To Use:

1. When you have a large ordered array or list and need to find the postion of a specific value.

2. When you need to find the maximum or minimum value of a function.

3. When you need an alternative algorithm for bineary search with an efficient time complexity. 

4. When are you interested in reducing the number of comparisons.

Summary: 

1. Ternary Search is a divide-and conquer algorithm that is used to find the position of a specific value in a given array or list. 

2. It works by dividing the array into three parts and recursively performing the search operation on the appropriate part until the seired element is found. 

3. The algorithm has a time complexity of O(log3n) and is more efficient than a linear search, but less commonly used than other search algorithms like binary search. 

4. It's important to not that the array to be searched must be sorted for Ternary Search to work correctly. 




 */