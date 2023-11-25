// Q: Find the number of unique elements

function findUnique(inpArr: number[]):number{
    
  // declaring a hashmap
  const hashMap: Record<number, boolean> = {};
  
  // declaring a count variable
  let count: number = 0; 
  
  // loop through all the elements in the array
  for(let i: number = 0; i < inpArr.length; i++){
      
      // taking each element in the array
      const element: number = inpArr[i];
      
      // if hashmap doesnt have the current element
      if(!hashMap[element]){
          
          // increment the count by one beacuse still it is unique
          count += 1;
          
          // setting the element in the hashmap
          hashMap[element] = true;
      };
  };
  return count;
};

(function main(){
  const input = [1, 1, 2, 4, 4, 6, 7, 7, 7];
  const result: number = findUnique(input);
  console.log(result);
}());