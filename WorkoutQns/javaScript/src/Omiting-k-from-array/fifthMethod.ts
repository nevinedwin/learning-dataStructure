// Read write pointer method

function omitK(inp: number[], k: number): number{
  let wp: number = 0; // reader pointer
  let rp: number = 0; // writer pointer
  
  // reading each element using reader pointer
  while(rp < inp.length){
      
    // check reader pointer points to k element poisiton
    if(inp[rp] === k){ 
        
      // increment only reader pointer
      rp++;  
        
    // if reader pointer not in k element position
    }else{ 
        
      // shift the reader pointer element into writer pointer index
      inp[wp] = inp[rp]; 
        
      // increment both reader and writer
      wp++; rp++;
    };  
  };
  return wp;
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