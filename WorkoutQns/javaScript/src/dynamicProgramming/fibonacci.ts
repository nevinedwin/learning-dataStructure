/** 
  Dynamic Programming can be divided into two parts
  
                      Dynamic Programing
                              /\
                             /  \
                            /    \
                           /      \
                  Memoization    Tabulation
        . We cut down the             .  
        reccursive calls.
        O(n) time
        O(n) space
 */



// Question?
// Wtrite a function 'fib(n)' that takes in a number as an argument.
// The function should return the nth number of the fibonacci sequence.


// main function 
(function () {


    const input: number = 7;

    // let fibonacci: number = fib(input);

    let fibonacci1: number = fib1(input);

    // console.log(fibonacci);

    console.log(fibonacci1);

})();



// normal reccursive function [ complexity: time -> O(2^n), space -> O(n) ]
function fib(n: number): number {

    if (n <= 2) return 1;

    return fib(n - 1) + fib(n - 2);
};


//  using memoziation -> store the repeating instance of the reccursive tree and reuse it
//  Js object, keys will be arg to fn, value will be the return value.


function fib1(n: number, memo: { [key: number]: number } = {}): number {

    if (n in memo) return memo[n];

    if (n <= 2) return 1;

    memo[n] = fib1(n - 1, memo) + fib1(n - 2, memo);

    return memo[n];
};