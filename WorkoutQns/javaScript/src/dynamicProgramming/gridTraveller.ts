// Question?
/**
 
  Say that you are traveller on a 2d grid. You begin in the top-left
  corner and your goal is to travel to the bottom-right corner. You
  may only move down or right. 

  In how many ways can you travel to the goal on a grid with diamensions m * n ?

  write a function 'gridTraveller(m, n)' that calculates this.

 */



(function () {

    const m: number = 5;
    const n: number = 5;

    const output = gridTraveller(m, n);

    console.log(output);

})()


function gridTraveller(m: number, n: number, memo: { [key: string]: number } = {}): number {

    const key = `${m},${n}`;

    const reversekey = `${n},${m}`;

    if (key in memo ) return memo[key];

    if (reversekey in memo ) return memo[reversekey];

    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return 1;

    memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);

    return memo[key];

};