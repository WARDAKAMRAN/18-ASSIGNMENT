//store the location in an array
let placeTovisit : string[] = ["Tokyo","Pakistan","America","China","Japan" ];

//print the array in its original orders
console.log("Original order:",placeTovisit);

//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placeTovisit].sort());

//show that the Arrayin still in its original order
console.log("orignal order after sorting:",placeTovisit);

//print the array in reverse alphabetical order without chaning  the order of the original list
console.log("reverse alphabetical order:", [...placeTovisit].sort().reverse());

//show that the Arrayin still in its original order
console.log("orignal order after sorting:",placeTovisit);

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
placeTovisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placeTovisit);







