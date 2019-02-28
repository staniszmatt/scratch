
// let test = [50,2,56,3,4,7,6,32,66]

// function makeArrayConsecutive2(statues) {
	
//    statues.sort(function(a, b){return a-b})
//    console.log("Statues orginized ",statues)
//    const newArray = [];

// 	const numArrayLength = statues[statues.length-1] - statues[0];
//    let numCheck = statues[0];
//    console.log("Num Check ",numCheck)
//    let loopIndex = 0;
//    while(loopIndex !== numArrayLength){
   
//       let num = statues[loopIndex];
//       console.log("num ",num)
//       let numCompare = statues[loopIndex+1];
//       console.log("compare ", numCompare);

//       if (num + 1 !== numCompare){ 
//       	num += 1
//       	console.log("new Num ", num)
//          statues.splice( statues[loopIndex+1] , 0, num);
//          console.log(statues)
//       }
//       loopIndex++;
//       console.log(setIndex);
//    }
//    return statues;
// }

// console.log(makeArrayConsecutive2(test));
test = [50,2,56,3,4,7,6,32,66];
let insertionSort = (inputArr) => {
   //Set the length of the array 
   let length = inputArr.length;
   console.log("Sorting this Array ", inputArr);
   //setup loop to loop through each item in the array for sorting
   //Starting index at 1 to compare, 
      //This is so we can compare the previous value in the array when we start comparing
   for (let i = 1; i < length; i++) {
         console.log("loop index: ",i)
      //set key to compare through array at loop index
         let key = inputArr[i];
            console.log("key compare: ", key)
      //set index of while loop to be 1 less than the loop index 
         //This is to compare the previous value and why we start i at 1
      //This start the comparison at the start of the index at the start of the array
         let j = i - 1;
            console.log("j index for while loop: ", j)
         while (j >= 0 && inputArr[j] > key) {
         //Insert value in input array at the next location of the array 
         //while it is greater than the key value
               console.log(`Replacing ${inputArr[j]} with ${inputArr[j + 1]}`)
            inputArr[j + 1] = inputArr[j];
               console.log("Array now: ", inputArr);
         //We want to loop backwards through the array so we will decrement through the array. 
            j = j - 1;
            console.log("j index -- ",j)
         }
      //Replace the lower value with the moved higher value 
      //If it was not moved, it will replace itself with the same value
      console.log("Broke while loop with ", inputArr[j]);
      console.log(`replace ${inputArr[j+1]} with ${key}`);
         inputArr[j + 1] = key;
      console.log("updated array: ",inputArr)
   }
   console.log("finished sorting! New array ", inputArr)
   return inputArr;

};

console.log("Results ", insertionSort(test));