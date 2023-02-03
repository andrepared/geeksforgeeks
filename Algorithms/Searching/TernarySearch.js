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