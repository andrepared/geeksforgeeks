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


/**
A function produces a side effect if it does anything other than take a value and return another value or values. A side effect could be writing a file, modifying a global variable, or accidentally wiring all your money to a stranger.

Now, you do need to have sided effects in a program on occasion. Like the previous example, you might need to write a file. What you want to do is to centralize where you are doing this. Don't have several functions and classes that write to a particular file. Have one service that does it.

The main point is to avoid common pitfalls like sharing state between objects without any structure, using mitable data types that can be written to anything, and not centralizing where your side effects occur. If you can do this, you will be happier 
 */
// Avoid side effects Pt.1 
/**
    In JS some values are unchangeable(inmmutable) and some are changeable(mutable). Objects and arrays are two kinds of mutable values so it's important to handle them carefully when they're passed as parameters to a function. A JS function can change a object's properties or alter the contents of an array which could easily cause bugs elsewhere.

    Suppose there's a function that accepts an array parameter representing a shopping cart. If the function makes a change that shopping cart array - by adding an item to purchase, for example - then any other function that uses that same cart array will be affected by this addition. That may be great, however, it could also be bad. Let's imagine a bad situation :

    1. There might be cases where you actually want to modify the input object, but when you adopt this programming practice you will find that those cases are pretty rare. Most things can be refactored to have no side effects!

    2. Cloning big objects can be very expensive in terms of perfomance. Luckily, this isn't a big issue in practice bc there are great libraries that allow this kind of programming approah to be fast and not as memory intensive as it woulf be for you to manually clone objects and arrays.
 */

function splitIntoFirstAndLastName(name){
return name.split(" ");
}
const name = "Andres Garcia";
const newName = splitIntoFirstAndLastName(name);

console.log(name)
