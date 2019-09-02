// function handleMouseMove(event){ TODO: Made by myself but running into bubbling issues. 
//   console.log("handle move, ");
//   const selectedElm = event.target;
//   selectedElm.style.position = "absolute";

//   selectedElm.style.left = event.pageX - selectedElm.offsetWidth / 2 + 'px';
//   selectedElm.style.top = event.pageY - selectedElm.offsetHeight / 2 + 'px';
// }

// function handleMouseDown(event){
//   console.log("mouse Down, ");
//   event.target.addEventListener('mousemove', handleMouseMove);
// }

// function handleMouseUp(event){
//   event.target.removeEventListener('mousemove', handleMouseMove);
//   console.log("mouse UP", event)
// }

// const clickDrag = document.getElementById('click-move');
// clickDrag.addEventListener('mousedown', handleMouseDown);
// clickDrag.addEventListener('mouseup', handleMouseUp);

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);