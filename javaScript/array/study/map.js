// Array containing multiple objects - each one representing a person
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]

// You might want to do it by creating an empty array,
// then using .forEach(), .for(...of), or a simple .for() to meet your goal.
// Let’s compare!

var officersIds = [];

// Using .forEach():
officers.forEach(function (officer) {
    officersIds.push(officer.id);
});

// using .map()
officersIds = officers.map(function (officer) {
    return officer.id
});

// more concise with arrow functions ES6
officersIds = officers.map(officer => officer.id);

// .map() Basically takes 2 arguments, a callback and an optional context
