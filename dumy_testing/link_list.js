//TODO: Add function to add a node anywhere in the  middle of the node list. 
//TODO: Add function to delete a node anywhere in between the node head and tail. 
class LinkedList {
   constructor (){
      this.head = null;
      this.tail = null; 
      this.current = null;
   }
   add(newValue, location = this.tail){
      //create new object node and add the value passed into it.
      //The link list is all stored within the specified object that was instantiated. 
      let newNode = {
         value: newValue,
         next: null,
      }
      //if its the very first created node set tail = to the new node, and then set the head to the tail. 
      //This sets the head and the tail to the single node. 
      if (this.head === null){
         this.current = this.head = this.tail = newNode;
         return;
      } else if(location===null){  //Adding node to middle of link list
         var oldHead = this.head;
         this.head = newNode;
         newNode.next = oldHead;
         return;
      }
      //First line sets the new node prev to the current value of null to show end of tail
      //Second line links the new tail end node.
      //The third line sets the new nodes value to the new node at the tail end. 
      newNode.next = location.next;
      location.next = newNode;
      if(location===this.tail){
         this.tail.next = newNode;
         this.tail = newNode;
      }
   }
   search(searchValue){
      this.current = this.head;
      while(this.current.value !== searchValue && this.current.next!==null){
         this.current = this.current.next;
      }
      if(this.current.value === searchValue){
         return this.current;
      } 
      return false;
   }
}

let list = new LinkedList;
list.add('a');
list.add('b');
list.add('c');
console.log("List is: ", list);