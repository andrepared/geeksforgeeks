/**
Insert operation in an array at any postion can can be performed by shifting elements to the right, which are on the right side of the required position. 

 */

// Javascript program to insert an element at a specific postion in an Array.
function insertElement(arr, n, x, pos) 
{
    // shift elements to the right which are on the right side of pos.
    var i = 0; 
    for (i; i >= pos; i--)
    {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}
var arr = Array(15).fill(0);
        arr[0] = 2;
        arr[1] = 4;
        arr[2] = 1;
        arr[3] = 8;
        arr[4] = 5;
        var n = 5;
        var x = 10;
        var pos = 2;
        console.log("Before Insertion: ");
        var i = 0;
        for (i; i < n; i++)
        {
            console.log(arr[i] + " ");
        }
        // Inserting key at specific position 
insertElement(arr, n, x, pos);
n += 1;
console.log("\n\nAfter Insertion: ");
i = 0;
for (i; i < n; i++) 
{
    console.log(arr[i] + " ")
}