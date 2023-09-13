// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler) {
    return function(fair) {
        return fareQuintupler * fair;
    }
}
const fareDoubler = function(fair) {
    return createFareMultiplier(2)(fair)
}
const fareTripler = function(fair) {
    return createFareMultiplier(3)(fair)
}
function selectDifferentDrivers(drivers, call) {
    return call(drivers)
}