//TODO: Add function to add a node anywhere in the  middle of the node list. 
//TODO: Add function to delete a node anywhere in between the node head and tail. 
class LinkedList {

   constructor (){
      this.head = null;
      this.tail = null; 
      this.current = null;
   }
   //location if left empty (undefiled) will default to the node tail (null)
   add(newValue, location = this.tail){
      //create new object node and add the value passed into it.
      //The link list is all stored within the specified object that was instantiated. 
      let newNode = {
         value: newValue,
         pre: null,
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
      //First line setup to track the prevouse node when creating new node
      //Second line sets the new node prev to the current value of null to show end of tail
      //Third line links the new tail end node.
      //The Forth line sets the new nodes value to the new node at the tail end. 
      newNode.pre = this.tail.value;
      newNode.next = location.next;
      location.next = newNode;

      if(location===this.tail){
         this.tail.next = newNode;
         this.tail = newNode;
      }
   }
   search(searchValue){
      //Set to start from the beginning of the link list
      this.current = this.head;
      //search through the whole list until you get to the tail
      while(this.current.value !== searchValue && this.current.next!==null){
         //Looping through each item of the list until reach search value or tail
         this.current = this.current.next;
      }
      //Verify search value was found and return it if so 
      if(this.current.value === searchValue){
         return this.current;
      } 
      //return false if reached tail and search value wasn't found
      return false;
   }
   delete( location = this.tail.value){
      //if location is undefined, delete the end.  if location is null, delete head
      //Start by storing the node to delete  
      let deleteNode = this.search(location);
      //if its not the tail do this
      if (location !== this.tail.value){
         //If its the head then do this
         if(location === this.head.value){
            //Store the next node to change to the head
            //Then set the current head to the next node
            //Then set next node pre to the pre of the head node to delete it from the list
            let nextNode = this.search(deleteNode.next.value);
            this.head = nextNode;
            nextNode.pre = deleteNode.pre; 
         } else {
            let preNode = this.search(deleteNode.pre);
            let postNode = this.search(deleteNode.next.value);
            preNode.next = deleteNode.next;
            postNode.pre = deleteNode.pre;   
         }
      } else {
         let preNode = this.search(deleteNode.pre);
         preNode.next = deleteNode.next;
         this.tail = preNode.value;
      }
   }
   move( targetNode, locationNode = this.tail.value ){
      
      //Store as reff variable 
      let savedNode=this.search(targetNode);
      this.delete(targetNode)
      //Added saved node to right side
      let locNode=this.search(locationNode);
      //Set target node reff
      savedNode.pre=locNode.value;
      savedNode.next = locNode.next;
      //Set the location node next reff
      locNode.next =savedNode;
      //if its the tail, reset the tail
      if (savedNode.next===null){
         this.tail = savedNode;
         //if not set the next node reff
      }else {
         let nextLocNode = this.search(locNode.next);
         savedNode.next = nextLocNode;
         nextLocNode.pre=savedNode.value;
      }
   }
}

let list = new LinkedList;
list.add('a');
list.add('b');
list.add('c');
list.add('d')
list.add('e');
console.log("List is: ", list);