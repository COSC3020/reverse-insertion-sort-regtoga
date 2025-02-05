//Refrence function
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
      var val = arr[i];
      var j;
      for(j = i; j > 0 && arr[j-1] > val; j--) {
        arr[j] = arr[j-1];
      }
      arr[j] = val;
    }
    return arr;
  }


function insertionSortReverse(array) {
    for(var i = array.length-1; i >= 0; i--) {
        var val = array[i];
        var j;
        //console.log(array[i]);

        //console.log("\nBefore loop: " + array)
        for(j = i; j < array.length-1 && array[j+1] < val; j++) {
            //console.log(array[j+1] + " < " + val);
            array[j] = array[j+1];
        }
        array[j] = val;
        //console.log("After loop: " + array + "\n")
        }
        return array;
}


//console.log(insertionSort([10,9,8,7]))
//console.log(insertionSortReverse([10,9,8,7]))