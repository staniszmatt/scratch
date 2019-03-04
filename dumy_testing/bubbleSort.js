const mixNumbers = [2, 45, 3, 89, 23, 43, 76, 22, 21, 15, 14, 16, 1, 4, 5, 6, 7, 8, 9];

function bubbleSort(numArrayToSort){
   //Assuming we need to sort
   let needToCheck = true; 
   //Grabbing the length of array to ease typing
   const length = numArrayToSort.length;
   //set array to a smaller var name for typing
   const nums = numArrayToSort;
   //Check array for sorting as until you can check from beginning to end without sorting
   while(needToCheck){
      console.log(nums);
      //Set loop to cycle through whole array
      for (outerIndex = 0; outerIndex < length; outerIndex++){
         //Set comparison loop to check if values need swapped
         console.log(nums);
         for(numIndex = 0; numIndex < length-outerIndex; numIndex++){
            //Assume we don't need to sort again 
            needToCheck = false;
            console.log(nums);
            if (nums[numIndex] > nums[numIndex+1]){
               //Order changed so check again by setting back to true
               needToCheck = true; 
               //Sorting required, swap values
               let tempNum = nums[numIndex+1];
               nums[numIndex+1] = nums[numIndex];
               nums[numIndex] = tempNum;  
               console.log(nums);
            } 
         }
      } 
   }
   return numArrayToSort;
}

console.log(bubbleSort(mixNumbers));