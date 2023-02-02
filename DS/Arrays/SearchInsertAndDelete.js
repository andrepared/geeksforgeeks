/**
Search Operation 
a program to search, insert, and delete operations in an unsorted array is discussed.

In an unsorted array, the search operation can be performed by linear traversal from the first element to the last element. 
 */

// Javascript program to implement linear 
//search in unsorted Array. 

// function to implement search operation 

function findElement(arr, n, key)
{
    let i;
    for (i = 0; i < n; i++)
    
        if (arr[i] == key)
        
            return i;
    
        return -1;
}

// Driver program 
let arr = [12, 34, 10, 6, 49];
let n = arr.length;

// Using a last element in search element
let key = 40;
let position = findElement(arr, n, key);

if (position == -1)
    document.write("Element not found");
else
    document.write("Element found at position: "
        + (position + 1));

/**
Time Complexity O(n)
Space Complexity O(1)

 */