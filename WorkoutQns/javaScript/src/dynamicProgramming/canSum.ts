
// question?
/**
 
    Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array
    of numbers as arguments.

    The function should return a boolean indicating whether or not it is possible to
    generate the targetSum using numbers from the array.
    
    You may use an element of the array as many times you needed.

    You may assume that all input numbers are nonnegative.

 */




(function () {

    const targetSum: number = 7;
    const numbers: number[] = [5, 3, 4, 7];

    const output = canSum(targetSum, numbers);

    console.log(output);

})();


function canSum(targetSum: number, numbers: number[], memo: { [key: number]: boolean } = {}): boolean {

    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;

    if (targetSum < 0) return false;


    for (let num of numbers) {

        if (canSum(targetSum - num, numbers, memo) === true) {

            memo[targetSum] = true;

            return memo[targetSum];
        };

    };

    memo[targetSum] = false;

    return false;
};