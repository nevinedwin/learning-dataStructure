

/**
  
  question ?

  Write a function 'countConstruct(target, wordBank)' that accepts
  a target string and an array of strings.

  The function should return the number of ways that
  the 'target' can be constructed by concatenating elements of the
  'wordBank' array.

  You may reuse elements of 'wordBank' as many times as needed.

 */


(function () {

    const target1: string = 'abcdef';
    const wordBank1: string[] = ['ab', 'abc', 'cd', 'def', 'abcd'];

    const target2: string = 'skateboard';
    const wordBank2: string[] = ['hd', 'rd', 'ate', 't', 'ska', 'sk', 'boar'];


    const target3: string = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
    const wordBank3: string[] = ['e', 'ee', 'eee', 'eeee', 'eeee'];

    const target4: string = 'purple';
    const wordBank4: string[] = ['purp', 'p', 'ur', 'le', 'purpl'];

    const output1: number = countConstruct(target1, wordBank1);
    const output2: number = countConstruct(target2, wordBank2);
    const output3: number = countConstruct(target3, wordBank3);
    const output4: number = countConstruct(target4, wordBank4);

    console.log(output1);
    console.log(output2);
    console.log(output3);
    console.log(output4);

})();


function countConstruct(target: string, wordBank: string[], memo: { [key: string]: number } = {}): number {

    if (target in memo) return memo[target];

    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {

        if (target.indexOf(word) === 0) {

            const suffix = target.slice(word.length);

            const count = countConstruct(suffix, wordBank, memo);

            totalCount += count;

        };
    };

    memo[target] = totalCount;

    return totalCount;
};