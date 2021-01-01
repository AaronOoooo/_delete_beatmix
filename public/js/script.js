// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];
let drumCycleLength = 16;

function initDrumArray(drumArray, drumLength) {
    for(let i = 0; i < drumLength; i++) {
        drumArray[i] = false;
    }
    return drumArray;    
}

kicks = initDrumArray(kicks, drumCycleLength);
console.log(kicks);
snares = initDrumArray(snares, drumCycleLength);
console.log(kicks);
hiHats = initDrumArray(hiHats, drumCycleLength);
console.log(kicks);
rideCymbals = initDrumArray(rideCymbals, drumCycleLength);
console.log(kicks);
