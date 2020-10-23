// What if you have an array, but only want some of the elements in it
// That’s where .filter() comes in!
var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];
// Say we want two arrays now: one for rebel pilots, the other one for imperials

var rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
});

// more concise with arrow functions ES6
rebels = pilots.filter(pilot => pilot.faction === "Rebels");
empire = pilots.filter(pilot => pilot.faction === "Empire");
