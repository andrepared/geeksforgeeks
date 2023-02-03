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

class Airplane {
// ...
}

class Boeing777 extends Airplane {
//...
getCruiseAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
    }
}

class AirForceOne extends class Airplane {
    //.. 
    getCruiseAltitude() {
    return this.getMaxAltitude();
    }
}
