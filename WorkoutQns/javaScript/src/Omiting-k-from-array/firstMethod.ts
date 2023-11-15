// My initial solution

function omitK(inp: Array<number | "_">, k: number): number {
  let count = 0;
  let i = 0;
  //     Loop through each element for checking any element contains the value k
  while (i < inp.length - count) {
    // checking each index it contains the value k         
    if (inp[i] === k) {
      // increment the count            
      count += 1;
      // Function for removing the element and reIndexing others             
      reIndexArr(i);
    } else {
      i++;
    };
  };

  function reIndexArr(ind: number) {
    // loop through each element staring from the kth element position to array length minus count         
    for (let j = ind; j < inp.length - count; j++) {
      inp[j] = inp[j + 1];
    };
    // adding the "_ " to the last;
    inp[inp.length - count] = "_";
  };

  // returning the length of array which doesnt contains k value
  return inp.length - count;
};



(function main() {
  const input = [1, 2, 3, 2, 2, 4, 5, 6, 7];
  const k = 2;
  const resp = omitK(input, k);
  console.log("inputArr", input);
  console.log("length of array", resp)
}());


// Time complexity O(n^2);
// space complexity O(1);