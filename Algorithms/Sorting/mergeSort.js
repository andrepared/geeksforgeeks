/**
Like Merge Sort, QuickSort is a divide and conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in diffrent ways.
 */

/**
Always pick the first element as a pivot. 

Always pick the last element as a pivot

Pick a random element as a pivot 

Pick median as pivot
-----------------------------

The key process in quickSort is a partition(). The traget of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) afterx. All this should be done in linear time.

 */


// Don't write to global functions 
/**
    Polluting globals is bad practice in JS because you could clash with another library and the usser of your API would be none-the-wiser until they get an exception in production. Let's think about an example, what if you wanted to extend JS's native Array method to have a diff method that could show the difference between two arrays? You could write your new function to the Array.prototype, but it could clash with another library that tried to do the same thing. What if the other library was just using diff to find the difference between the first and last elements of an array? This is why it would be better to just use the ES2015/ES6 classes and simply extend Array gloabl.
 */

Array.prototype.diff = function diff(comparisonArray){
    const hash = new Set(comparisonArray);
    return this.filter(ele => !hash.has(ele));
};
// Do NOT do this!!!!!