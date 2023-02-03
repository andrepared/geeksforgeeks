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
Avoid conditionals 

This seems like an impossible task. UPon first hearing this
*/

/**
Avoid Type-checking

JS is untyped, meaning your functions can take any type of argument. Sometimes you are bitten bu this freedom and it becomes temptomg to do type-checking in your functions. There are many ways to avoid having to do this. The first thing to consider is consistent APIs.
 */

function travelToTexas(vehicle){
    if ( vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location("texas"));
} else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location("texas"));

    }
}

function travelToTexas(vehicle) {
vehicle.move(this.currentLocation, new Location("texas"));
}
