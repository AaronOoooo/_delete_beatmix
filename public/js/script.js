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

function toggleDrum(drum, index) {
    switch(drum) {
        case 'kicks':
            kicks[index] = !kicks[index];
            break;
        case 'snares':
            snares[index] = !snares[index];
            break;
        case 'hiHats':
            hiHats[index] = !hiHats[index];
            break;
        case 'rideCymbals':
            rideCymbals[index] = !rideCymbals[index];
            break;
        default:
            console.log('No selection chosen');
    }
}

function clear(arrString) {
    if (arrString === 'kicks') {
        kicks = kicks.map(x => false);
    }
    if (arrString === 'snares') {
        snares = snares.map(x => false);
    }
    if (arrString === 'hitHats') {
        hitHats = hitHats.map(x => false);
    }
    if (arrString === 'rideCymbals') {
        rideCymbals = rideCymbals.map(x => false);
    }
}

function invert(arrString) {
    if (arrString === 'kicks') { 
        for (i = 0; i < kicks.length; i++) {
            kicks[i] = !kicks[i];
        }
    }
}

kicks = initDrumArray(kicks, drumCycleLength);
snares = initDrumArray(snares, drumCycleLength);
hiHats = initDrumArray(hiHats, drumCycleLength);
rideCymbals = initDrumArray(rideCymbals, drumCycleLength);

toggleDrum('kicks', 7);
console.log(kicks);
invert('kicks');
console.log(kicks);


