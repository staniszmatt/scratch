test = [50,2,56,3,4,7,6,32,66];
let insertionSort = (mixNumArray) => {
   //Set the length of the array 
   let length = mixNumArray.length;
   console.log("Sorting this Array ", mixNumArray);
   //setup loop to loop through each item in the array for sorting
   //Starting index at 1 to compare, 
      //This is so we can compare the previous value in the array when we start comparing
   for (let numIndex = 1; numIndex < length; numIndex++) {
         console.log("loop index: ",numIndex)
      //set nextNumToCompare to compare through array at loop index
         let nextNumToCompare = mixNumArray[numIndex];
            console.log("nextNumToCompare compare: ", nextNumToCompare)
      //set index of while loop to be 1 less than the loop index 
         //This is to compare the previous value and why we start i at 1
      //This start the comparison at the start of the index at the start of the array
         let compareIndex = numIndex - 1;
            console.log("compareIndex index for while loop: ", compareIndex)
         while (compareIndex >= 0 && mixNumArray[compareIndex] > nextNumToCompare) {
         //Insert value in input array at the next location of the array 
         //while it is greater than the nextNumToCompare value
               console.log(`Replacing ${mixNumArray[compareIndex]} with ${mixNumArray[compareIndex + 1]}`)
            mixNumArray[compareIndex + 1] = mixNumArray[compareIndex];
               console.log("Array now: ", mixNumArray);
         //We want to loop backwards through the array so we will decrement through the array. 
         compareIndex = compareIndex - 1;
            console.log("compareIndex index -- ",compareIndex)
         }
      //Replace the lower value with the moved higher value 
      //If it was not moved, it will replace itself with the same value
      console.log(`Broke while loop since ${mixNumArray[compareIndex]} is greater than ${nextNumToCompare}` );
      console.log(`replace ${mixNumArray[compareIndex+1]} with ${nextNumToCompare}`);
         mixNumArray[compareIndex + 1] = nextNumToCompare;
      console.log("updated array: ",mixNumArray)
   }
   console.log("finished sorting! New array ", mixNumArray)
   return mixNumArray;

};

console.log("Results ", insertionSort(test));



let test = [50,2,56,3,4,7,6,32,66]

function makeArrayConsecutive2(statues) {
	
   statues.sort(function(a, b){return a-b})
   console.log("Statues orginized ",statues)
   const newArray = [];

	const numArrayLength = statues[statues.length-1] - statues[0];
   let numCheck = statues[0];
   console.log("Num Check ",numCheck)
   let loopIndex = 0;
   while(loopIndex !== numArrayLength){
   
      let num = statues[loopIndex];
      console.log("num ",num)
      let numCompare = statues[loopIndex+1];
      console.log("compare ", numCompare);

      if (num + 1 !== numCompare){ 
      	num += 1
      	console.log("new Num ", num)
         statues.splice( statues[loopIndex+1] , 0, num);
         console.log(statues)
      }
      loopIndex++;
      console.log(setIndex);
   }
   return statues;
}

console.log(makeArrayConsecutive2(test));
test = [50,2,56,3,4,7,6,32,66];
let insertionSort = (mixNumArray) => {
   //Set the length of the array 
   let length = mixNumArray.length;
   console.log("Sorting this Array ", mixNumArray);
   //setup loop to loop through each item in the array for sorting
   //Starting index at 1 to compare, 
      //This is so we can compare the previous value in the array when we start comparing
   for (let numIndex = 1; numIndex < length; numIndex++) {
         console.log("loop index: ",numIndex)
      //set nextNumToCompare to compare through array at loop index
         let nextNumToCompare = mixNumArray[numIndex];
            console.log("nextNumToCompare compare: ", nextNumToCompare)
      //set index of while loop to be 1 less than the loop index 
         //This is to compare the previous value and why we start i at 1
      //This start the comparison at the start of the index at the start of the array
         let compareIndex = numIndex - 1;
            console.log("compareIndex index for while loop: ", compareIndex)
         while (compareIndex >= 0 && mixNumArray[compareIndex] > nextNumToCompare) {
         //Insert value in input array at the next location of the array 
         //while it is greater than the nextNumToCompare value
               console.log(`Replacing ${mixNumArray[compareIndex]} with ${mixNumArray[compareIndex + 1]}`)
            mixNumArray[compareIndex + 1] = mixNumArray[compareIndex];
               console.log("Array now: ", mixNumArray);
         //We want to loop backwards through the array so we will decrement through the array. 
         compareIndex = compareIndex - 1;
            console.log("compareIndex index -- ",compareIndex)
         }
      //Replace the lower value with the moved higher value 
      //If it was not moved, it will replace itself with the same value
      console.log(`Broke while loop since ${mixNumArray[compareIndex]} is greater than ${nextNumToCompare}` );
      console.log(`replace ${mixNumArray[compareIndex+1]} with ${nextNumToCompare}`);
         mixNumArray[compareIndex + 1] = nextNumToCompare;
      console.log("updated array: ",mixNumArray)
   }
   console.log("finished sorting! New array ", mixNumArray)
   return mixNumArray;

};

console.log("Results ", insertionSort(test));