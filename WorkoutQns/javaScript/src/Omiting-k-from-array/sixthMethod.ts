
// Linear and Window shrinking method

function omitK(inpArr: number[], k: number): number{
    
  // pointer 1
  let wp = inpArr.length;
  
  // pointer 2
  let rp = 0;
  
  // check  the p2 < p1
  while(rp < wp){
      
      // if p1 element is k
      if(inpArr[rp] === k ){
          
          // decrement the pointer 2
          wp -= 1;
          
          // swap two pointer elements
          swap(rp, wp);
      }else{
          // if not equal to k then increment p2
          rp++;
      };
  };
  
  // function for swap two indexes
  function swap(start: number, end: number){
      const A: number =inpArr[start]; const B: number=inpArr[end];
      inpArr[start] = B; inpArr[end] = A;
  };
  return rp;
};

(function main() {
  const input = [1, 2, 3, 4, 2, 2, 5, 6, 7, 2];
  const k = 2;
  const resp = omitK(input, k);
  console.log("Modified Array", input);
  console.log("Modified array length", resp);
}());

// Time complexity O(n);
// space complexity O(1);