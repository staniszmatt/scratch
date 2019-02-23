
let test = [1,2,5,6]

function makeArrayConsecutive2(statues) {
	
   statues.sort((a, b) => {return a-b})
   let counter = 0;

	const numArrayLength = statues[statues.length-1] - statues[0];
   let loopIndex = 0;
   while(loopIndex !== numArrayLength){
   
      let num = statues[loopIndex];
      let numCompare = statues[loopIndex+1];

      if (num + 1 !== numCompare){ 
         num += 1;
         counter++;
         statues.splice( loopIndex+1 , 0, num);
      }
      loopIndex++;
   }
   return counter;
}

console.log(makeArrayConsecutive2(test));