/**
In the deletion operation, the element to be deleted is searched using the linear search, and then the delete operation is performed followed by shifting the elements.

 */

// Javscript program to implement delete operation in an unsorted array.

// function to search a key to be deleted. 

function findElement(arr, n, key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    
    return -1;
}
 // function to delete an element
function deleteElement(arr, n, key) 
{
    // Find position of element to be deleted.
    let pos = findElement(arr, n, key);
    if (pos == -1)
    {
        document.write("Element not found"); 
        return n;
    }
    // Deleting element
    let i;
    for (i = pos; i < n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}

// Driver code 

let i; 
let arr = [10, 50, 30, 40, 20];

let n = arr.length;
let key = 30;

document.write("Array before deletion<br>");
for (i = 0; i < n; i++)
    document.write(arr[i] + " ");

n = deleteElement(arr, n, key);

document.write("<br><br>Array after deletion<br>");
for (i = 0; i < n; i++)  
    document.write(arr[i] + " ")