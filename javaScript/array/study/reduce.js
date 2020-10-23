// Say you have an array with these pilots and their respective years of experience:
var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

// We need to know the total years of experience of all of them.

var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);
// Notice that I’ve set the starting value as 0. 
// I could have also used an existing variable if necessary

// reduce will return the final value of our accumulator

// more concise with arrow functions ES6
totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);


// Now let’s say I want to find which pilot is the most experienced one.
// For that, I can use reduce as well:

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
// If a pilot has more years of experience than oldest, then that pilot becomes the new oldest so that’s the one I return