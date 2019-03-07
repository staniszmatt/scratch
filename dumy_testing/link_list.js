class LinkedList {
   constructor (){
      this.head = null;
      this.tail = null; 
      this.prev = null;
  
   }
   add(newValue){
      let newNode = {
         value: newValue,
         next: null,
      }
      if (this.head === null){
         this.head = this.tail = newNode;
         return;
      }
      newNode.prev = this.tail; 
      this.tail.next = newNode;
      this.tail = newNode;
   }
   delete(){
      this.tail = this.tail.prev;
      this.tail.next = null; 
   }
}

let list = new LinkedList;
list.add('a');
list.add('b');
list.add('c');

console.log(list); 