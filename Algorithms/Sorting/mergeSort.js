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

function emailClients(clients){
    clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if(clientRecord.isActive()) {

        email(client);
    }        
    });
}

function emailActiveClients(clients){
clients.filter(isActiveClient).forEach(email)
}

function isActiveClient(client) {
    const clientRecord = database.lookup(client);
return clientRecord.isActive();
}
