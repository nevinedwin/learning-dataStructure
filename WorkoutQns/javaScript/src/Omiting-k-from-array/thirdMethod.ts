// Another linear method

function omitK(inp: Array<number>, k: number): number{
  let i: number = 0;
  while(inp[i]!==k){i++}; // finding the first index of the k element
  
  let j: number = i+1;
  while(j < inp.length){
      if(inp[j] !== k){ //finding the next non-k element index
          swap(i++, j); // swaping the values in index j and i
      };
      j++;
  };
  
  // function for swapping two indexes
  function swap(start: number, end: number){
      const A: number = inp[start]; const B: number = inp[end];
      inp[start] = B; inp[end] = A;
  };
  
  return i;
};


(function main() {
  const input = [1, 2, 3, 4, 3, 2, 3, 3, 5, 6];
  const k = 3;
  const resp = omitK(input, k);
  console.log("Modified input: ", input);
  console.log("Length of array modified: ", resp);
}());

// Time complexity O(n);
// space complexity O(1);