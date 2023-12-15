

/**
  
  question ? 

  Write a function 'bestSum(targetSum, numbers)' that takes in
  a targetSum and an array of numbers as an arguments.

  The function should return an array containing the shortest
  combination of numbers that add up to exactly the targetSum.

  If there is a tie for the shortest combination, you may return
  any one of the shortest.

 */


(function () {

    const targetSum: number = 7;
    const numbers: number[] = [2, 4, 5, 6, 7];

    const output = bestSum(targetSum, numbers);

    console.log(output);

})()



function bestSum(targetSum: number, numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null {

    if (targetSum in memo) return memo[targetSum];

    if (targetSum < 0) return null;

    if (targetSum === 0) return [];

    let shortestCombination: number[] | null = null;

    for (let num of numbers) {

        const reminder = targetSum - num;

        const combinationResult = bestSum(reminder, numbers, memo);

        if (combinationResult !== null) {

            const combination = [...combinationResult, num];

            if (!shortestCombination || shortestCombination.length > combination.length) {

                shortestCombination = combination
            };
        };

    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};