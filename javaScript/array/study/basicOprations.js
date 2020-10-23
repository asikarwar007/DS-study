const arr= ['a', 'b', 'c', 'd'];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, 
// hey go to the array and grab the 3rd item from where the array is stored.

//push
arr.push('e'); // O(1)

//pop
arr.pop();
arr.pop(); // O(1)

// unshift
// Add x at the start of Array
arr.unshift('x') // O(1)

// shift
// Remove First element from the start of Array
arr.shift() // O(1)


//splice
// insert alien at 3rd postion of Array  
arr.splice(2, 0, 'alien'); // O(1)

// If you want to remove any element just type the index and no. of element that are going to remove
arr.splice(2, 1); // O(1)
// This will remove 3rd element from array


console.log(arr)