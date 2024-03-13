var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//store the location in an array
var placeTovisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
//print the array in its original orders
console.log("Original order:", placeTovisit);
//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placeTovisit, true).sort());
//show that the Arrayin still in its original order
console.log("orignal order after sorting:", placeTovisit);
//print the array in reverse alphabetical order without chaning  the order of the original list
console.log("reverse alphabetical order:", __spreadArray([], placeTovisit, true).sort().reverse());
//show that the Arrayin still in its original order
console.log("orignal order after sorting:", placeTovisit);
//reverse the order of the list
placeTovisit.reverse();
console.log("Reverse Order:", placeTovisit);
//Reverse the order of the list again to get back to the original order
placeTovisit.reverse();
console.log(" Back to original order:", placeTovisit);
//Sort the array in alphabetical order
placeTovisit.sort();
console.log("sorted in alphabetical order:", placeTovisit);
//Sort the array in reverse  alphabetical order
placeTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placeTovisit);
