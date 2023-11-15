// Linear solution

function omitK(inp: Array<number>, k: number): number {

  // index of kth element
  let orgIndex: number = 0;

  // flag for knowing that the kth element first index is finded
  let isFindFirstIndex = false;

  // pointer for looping
  let nIndex: number = 0;

  // Looping through the array     
  while (nIndex < inp.length) {

    // check if the element is k
    if (inp[nIndex] === k) {

      // check the first index of k is already finded ?
      if (!isFindFirstIndex) {

        // if not find assigning the index of k
        orgIndex = nIndex;

        // setting the flag for knowing that the first index of k is finded;
        isFindFirstIndex = true;
      };
    } else {

      // check if index of k is finded or not
      if (isFindFirstIndex) {

        // swap the indexes
        swap(orgIndex, nIndex);

        // append the k index to next one
        orgIndex += 1;;
      };
    };

    // append the pointer
    nIndex++;
  };

  // Function for swaping two indexes in the input Array;
  function swap(start: number, end: number) {
    const A: number = inp[start]; const B: number = inp[end];
    inp[start] = B; inp[end] = A;
  };

  return orgIndex;
};

(function main() {
  const input: Array<number> = [1, 2, 3, 4, 3, 2, 3, 3, 5, 6];
  const k: number = 2;
  const len: number = omitK(input, k);
  console.log("modified input: ", input);
  console.log("Array Length after omiting K: ", len)
}());

// complexities
// time = O(n);
// space = O(1);