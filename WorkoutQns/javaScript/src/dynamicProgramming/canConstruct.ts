

/**
  
  question ?

  Write a function 'canConstruct(target, wordBank)' that accepts
  a target string and an array of strings.

  The function should return a boolean indicating whether or not
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

    const output1 = canConstruct(target1, wordBank1);
    const output2 = canConstruct(target2, wordBank2);
    const output3 = canConstruct(target3, wordBank3);

    console.log(output1);
    console.log(output2);
    console.log(output3);

})();

function canConstruct(target: string, wordBank: string[], memo: { [key: string]: boolean } = {}): boolean {

    if (target in memo) return memo[target];

    if (target === '') return true;

    for (let word of wordBank) {

        if (target.indexOf(word) === 0) {

            const suffix = target.slice(word.length);

            if (canConstruct(suffix, wordBank, memo) === true) {

                memo[target] = true;

                return memo[target];
            };
        }
    };

    memo[target] = false;

    return memo[target];
};