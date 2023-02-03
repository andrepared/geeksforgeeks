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
Use getters and setters

using getters and setters to access data could be better than simply looking for a property on an object.
    1. When you want to do more beyond getting an object propertym you don't have to look up and change every accessor in your codebase. 
    2. Makes adding validation simple when doing a set/ 
    3. Encapsulates the internal representation/ 
    4. Easy to add logging and error handling when getting and setting 
    5. You can lazy load your object's properties, let's say getting it from a server.


 */

function makeBankAccount() {
// ....
    return {
        balance: 0
//....    
    };
}
const account = makeBankAccount();
account.balance = 100;

function makeBankAccount()
{
    // this one is private
    let balance = 0;
    // a getter made public via the returned object below.
    function getBalance() 
    {
        return balance;
    }
    // a setter made public via the returned object below. 
    function setBalance()
    {
        //... validate before updating the balance.
        balance = amount;    
    }
    return {
    getBalance,
    setBalance
};

}
const amount = makeBankAccount();
account.setBalance();