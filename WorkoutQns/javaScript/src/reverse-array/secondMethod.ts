function reverse(inputArray: Array<number>): void{
  let left: number = 0
  let right: number =  Math.floor((inputArray.length-1)/2) ;
  while(left <  right){
      swap(left++, right--);
  };
  
  function swap(start: number, end: number): void{
      const A: number = inputArray[start];  const B: number = inputArray[end];
      inputArray[start] = B; inputArray[end] = A;
  };
};

(function main(){

  const input: Array<number> = [1,2,3,4,5, 6,7,8];
  reverse(input);
  console.log(input);

});