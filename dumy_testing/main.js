
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