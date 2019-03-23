// window.onload = startWhenReady;

// function startWhenReady(){
//   const mouseClick = document.getElementById('click-drag');
//   mouseClick.addEventListener('mousedown', dragAndDrop);
//   mouseClick.addEventListener('mouseup', dragAndDrop);
//   mouseClick.addEventListener('drag', onMouseMove);
// }

// function dragAndDrop(event){
//   const wrapper = document.getElementsByClassName('main-div');
//   console.log(event);
//   const selectedElm = event.target.parentElement;
//   selectedElm.style.position = "absolute";

//   elmToMove.style.left = pageX - elmToMove.offsetWidth / 2 + 'px';
//   elmToMove.style.top = pageY - elmToMove.offsetHeight / 2 + 'px';
// }

// function onMouseMove(event) {
//   moveAt(event.pageX, event.pageY);
// }

function handleMouseMove(event){
  console.log("handle move, ");
  const selectedElm = event.target;
  selectedElm.style.position = "absolute";

  selectedElm.style.left = event.pageX - selectedElm.offsetWidth / 2 + 'px';
  selectedElm.style.top = event.pageY - selectedElm.offsetHeight / 2 + 'px';
}

function handleMouseDown(event){
  console.log("mouse Down, ");
  event.target.addEventListener('mousemove', handleMouseMove);
}

function handleMouseUp(event){
  event.target.removeEventListener('mousemove', handleMouseMove);
  console.log("mouse UP", event)
}

const clickDrag = document.getElementById('click-move');
clickDrag.addEventListener('mousedown', handleMouseDown);
clickDrag.addEventListener('mouseup', handleMouseUp);
