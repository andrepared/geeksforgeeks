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
Remove dead code.
Dead code is just as bad as duplicate code. There's no reason to keep it in your codebase. If it's not being called, then get rid of it! It will still be safe in your version history if you still need it.
 */

/**
Prefer ES2015/ES6
it's very difficult to get readable class inheritance, construction, and method definitions for classical ES5 classes. If you need inheritance (and be aware that you might not), then prefer ES2015/ES5 classes. However, prefer small functions over classes until you find yourself needing larger and more complex objects.
 */

class Animal {
    constructor(age){
    this.age = age;
    }

    move() {
    //...
    }
};

class mammal extends Animal {
    constructor(age, furColor) {
    super(age);
    this.color = furColor;
    }

    liveBirth() {
    //...
    }
};
class Human extends Mammal {
    constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
    }

    speak() {
        // ...
    }
};