function mergeSortedArrays(arr1, arr2){ 
  if(!arr1.length) return arr2;
  if(!arr2.length) return arr1;

  let i = 1; 
  let j = 1; 
  const mergedArray = [];

  let pointer1 = arr1[0];
  let pointer2 = arr2[0];

  while(pointer1 || pointer2){
    console.log(pointer1, pointer2)
    if(!pointer2 || pointer1 < pointer2){
      mergedArray.push(pointer1);
      pointer1 = arr1[i];
      i++;
    }else{
      mergedArray.push(pointer2);
      pointer2 = arr2[j];
      j++;    
    };
    if(i > 10){
      break;
    }
  };
  return mergedArray;
};

const result = mergeSortedArrays([ 2, 4, 6, 8], [1, 3, 5, 7]);
console.log(result);