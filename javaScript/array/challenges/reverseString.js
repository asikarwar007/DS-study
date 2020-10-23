// Create a Function that reverse a String:
// 'The quick brown fox jumps over the lazy dog'
// 'god yzal eht revo spmuj xof nworb kciuq ehT'

function reverse(str) {
    if (!str || typeof str != 'string' || str.length < 2) return str;

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

// using Reverse method
function reverse2(str) {
    //check for valid input
    return str.split('').reverse().join('');
}

// more concise with arrow functions ES6
const reverse3 = str => str.split('').reverse().join('');

// more fancy way to impress using Spread Operator 
// use at your Own risk in interview

const reverse4 = str => [...str].reverse().join(''); 

reverse('The quick brown fox jumps over the lazy dog')