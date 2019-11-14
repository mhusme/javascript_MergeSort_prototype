Array.prototype.merger = function(arr1) {
  const arr2 = this;
  const len_arr1 = arr1.length;
  const len_arr2 = arr2.length;
  let i = 0;
  let j = 0;
  let merged_array = [];
  
  while (i < len_arr1 && j < len_arr2){
    if( arr1[i] <= arr2[j]){
      merged_array.push(arr1[i]);
      i++;
    }
    else{
      merged_array.push(arr2[j]);
      j++;
    }
  }
  
  if (i < len_arr1){
    merged_array = [...merged_array,...arr1.slice(i)];
  }
  else {
    merged_array = [...merged_array,...arr2.slice(j)];
  }
  
  return merged_array;
};

Array.prototype.MergeSort =  function() {
  

  const arr = this;
  const arr_length = arr.length;
  const half_length = arr_length/2;
  
  if (arr_length === 1){
    return arr;
  }
  
  const sorted_array = arr.slice(0,half_length).MergeSort().merger(arr.slice(half_length).MergeSort());
  return sorted_array;
};
