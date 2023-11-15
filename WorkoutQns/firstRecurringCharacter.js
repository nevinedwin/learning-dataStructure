// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should be 2
// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should be 1
// Given an array = [2, 3, 4, 5,];
// It should be undefined 
function firstReccuringChar(arr) {
    var hashMap = {};
    for (var i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            return arr[i];
        }
        else {
            hashMap[arr[i]] = i;
        }
        ;
    }
    ;
    return undefined;
}
;
var result = firstReccuringChar([2, 3, 4, 5,]);
console.log(result);
