function reverseThirds(inp: Array<number>): void{
    
  for(let i: number = 0; i < inp.length-1; i+=6){
      if(i+2 === inp.length){
          swap(i, i+1)
      }else {
          swap(i, i+2);                 
      };
  };

  function swap(start: number, end: number): void{
      const A = inp[start]; const B = inp[end];
      inp[start] = B; inp[end] = A;
  };
};

(function main(){

  const input: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  reverseThirds(input);
  console.log(input);

})