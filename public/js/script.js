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
            console.log(snares);
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

kicks = initDrumArray(kicks, drumCycleLength);
snares = initDrumArray(snares, drumCycleLength);
hiHats = initDrumArray(hiHats, drumCycleLength);
rideCymbals = initDrumArray(rideCymbals, drumCycleLength);

toggleDrum('rideCymbals', 0);
console.log(rideCymbals);