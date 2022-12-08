/ Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks) {
if (numberOfBlocks < 42) {
    return 42 - numberOfBlocks;
} else {
    return numberOfBlocks - 42;
}
}
function distanceFromHqInFeet(numberOfBlocks) {
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

