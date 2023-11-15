function reverseSameArray(arr: number[]){
  const newArr: number[] = arr; 
  let p1: number = 0; 
  let p2: number = newArr.length-1; 
  while(p1 !== p2){ 
      let startVal: number = arr[p1]; 
      let endVal: number = arr[p2]; 
      newArr[p1] = endVal;
      newArr[p2] = startVal; 
      p1++; p2--; 
  };
  return newArr; 
};

(function main(){
  const input = [1,2,3,4,5];
  const reverseSame = reverseSameArray(input);
  console.log(reverseSame)  
});