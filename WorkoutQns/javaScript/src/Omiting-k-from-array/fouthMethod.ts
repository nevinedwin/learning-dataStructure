// Another linear method

function omitK(inpArr: number[] , k: number): number{
  let j: number = 0;
  
  // looping through each element
  for(let i: number = 0; i < inpArr.length; i++){
      if(inpArr[i] === k){ //check the element is k
          j++; //if k increase the j value
      }else{
          inpArr[i - j] = inpArr[i]; // if the element is not k take that element into last kth element position
      };
  };
  
  for(let p: number = inpArr.length-1; p > j+1; p--){ // looping for last indexes for making the values k
      inpArr[p] = k;
  };
  
  return inpArr.length-j;
};


(function main() {
  const input: number[] = [1, 2, 4, 5, 5, 5, 5, 7, 8, 9];
  const k: number = 5;
  const resultLength = omitK(input, k);
  console.log("Modified input: ", input);
  console.log("Modified input Length: ", resultLength);
}());


// Time complexity O(n);
// space complexity O(1);