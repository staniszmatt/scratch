class Bowl{
    constructor(cubesCount, color){
        this.cubes = 0; 
        this.baseColor = color;
        this.bowlDom = null;
        this.textDom = null;

        this.clickHandler = this.clickHandler.bind( this ); //ONly for event handlers or things on outside class object

        this.add(cubesCount);
    }
    add(cubeAdd){
         this.cubes += cubeAdd;
         this.changeText();
    }
    remove(cubeRemove){
        var amountToRemove = cubeRemove; 
        if(cubeRemove > this.cubes){
            amountToRemove = this.cubes;
        }
        this.cubes -= amountToRemove;
        this.changeText();
        return amountToRemove; 
    }
    getAmount(){
        return this.cubes;
    }

    getcolor(){
        return this.baseColor;
    }
    setColor(newColor){
        var acceptableColors = ["yellow", "red", "green", "brown"];
        if (acceptableColors.indexOf(newColor) !== -1){
            console.error("must be colors not this one");
            return false;
        }
        this.baseColor = newColor;
    }
    changeText(){
        if (this.textDom !== null){
            this.textDom.text(this.cubes);
        }
    }
    changeColor(){
       
    }
    clickHandler(){
        console.log("Click");
        this.remove(1);

    }
    render(){
        //output of dom elements
        this.bowlDom = $("<div>")
            .addClass("bowl")
            .css("background-color", this.baseColor)
            .click(this.clickHandler);
        this.textDom = $("<div>")
            .addClass("bowlText")
            .text(this.cubes);

        this.bowlDom.append(this.textDom); 
        return this.bowlDom;
    }

}
    /*sausy*/

    // get color() {
    //     console.log("get color");
    //     return this.baseColor;
    // }
    // set color(newColor){
    //     console.log("set color");
    // }

//     removeFirst( cubeRemove ){
//         debugger;
//         if(cubeRemove > this.cubes){
//             var amountRemoved = this.cubes;
//             this.cubes = 0;
//             return amountRemoved;
//         } else {
//             this.cubes -= cubeRemove;
//             return cubeRemove;
//         }
//     }
    
//     removeDan( cubeRemove ){
//         debugger;
//         var amountToRemove = cubeRemove
//         if( cubeRemove > this.cubes ){
//             amountToRemove = this.cubes;
//         }
//         this.cubes -= amountToRemove;
//         return amountToRemove;
//     }
// }





// Example Code: //#endregion
// removeFirst( cubeRemove ){
//     debugger;
//     if(cubeRemove > this.cubes){
//         var amountRemoved = this.cubes;
//         this.cubes = 0;
//         return amountRemoved;
//     } else {
//         this.cubes -= cubeRemove;
//         return cubeRemove;
//     }
// }

// removeDan( cubeRemove ){
//     debugger;
//     var amountToRemove = cubeRemove
//     if( cubeRemove > this.cubes ){
//         amountToRemove = this.cubes;
//     }
//     this.cubes -= amountToRemove;
//     return amountToRemove;
// }