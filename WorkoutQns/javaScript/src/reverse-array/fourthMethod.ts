function reverseAlternate(inp: Array<number>): void{
  try{
      if(inp.length < 3) throw "Input Array length is less that 3";
      // finding how many elements in each division     
      const k: number = Math.ceil(inp.length / 3);

      // looping for getting 1st and 3rd sub array elements
      for(let i: number = 0; i < 3; i+=2 ){
          let left = i * k;
          let right = left + k-1;
          
          // if array length is not a multiple of 3, change the right element as the last element         
          if(right !== left && (right > inp.length-1 || right === inp.length-2)){
              right = inp.length-1;
          };

          // loop for reversing an array         
          while(left < right){
              swap(left++, right--);
          };
      };

      // Function that swaps position of two elements;      
      function swap(start: number, end: number){
          const A: number = inp[start]; const B: number = inp[end];
          inp[start] = B; inp[end] = A;
      };
  }catch(err){
      console.log(err);
  }  
};

const input: Array<number> = [1, 2, 3, 4, 5, 6];
reverseAlternate(input);
console.log(input);

// Time complexity is O(3)*o(n) => O(n);
// Space complexity is O(1);