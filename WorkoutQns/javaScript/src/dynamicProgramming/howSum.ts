
/**
  
  question?

  Write the function 'howSum(targetSum, numbers)' that takes in a targetSum
  and an array of numbers as arguments.

  The function should return an array containing any combination of elements
  that add up to exactly the targetSum. If there is no combination that adds
  up to the targetSum, then return null.

  If there are multiple combinations possible, you may return any single one.

 */


(function () {

    // const targetSum: number = 7;
    // const numbers: number[] = [5, 3, 4, 7];

    const targetSum: number = 300;
    const numbers: number[] = [7, 14];

    const output = howSum(targetSum, numbers);

    console.log(output);

})()


function howSum(targetSum: number, numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null {

    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];

    if (targetSum < 0) return null;

    for (let num of numbers) {

        const reminder = targetSum - num;

        const remainderResult = howSum(reminder, numbers, memo);

        if (remainderResult !== null) {

            memo[targetSum] = [...remainderResult, num];

            return memo[targetSum];
        };

    };

    memo[targetSum] = null;
    return null;
};