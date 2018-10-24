var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = null
var outer2 = null
var outer3 = null
var mida = null
var midb = null
var midc = null
var inner = null
function testAnswers(givenAnswers){
if
}
function handleMouseover(event) {
  var boxElement = event.target;
  boxElement.classList.add("box-selected")
  // console.log('Selecting box: ', boxElement);
}

function handleMouseout(event) {
  var boxElement = event.target;
  boxElement.classList.remove("box-selected")
  // console.log('De-selecting box: ', boxElement);
}

var mousemoveY = null
var mousemoveX = null


function handleMousemove(event) {
  return mousemoveY = event.y
  return mousemoveX = event.x
  console.log(event.x, event.y)
}

function handleGrabBox(event) {
var SelectedID = event.target.id;
var followerEl = document.getElementById(SelectedID)
console.log(followerEl);
console.log(mousemoveY, mousemoveX);
followerEl.style.top = mousemoveY;
followerEl.style.left = mousemoveX;
}

function handleDropBox(event) {
var followerEl = event.target;
console.log("Dropped");
followerEl.style.top = event.y;
followerEl.style.left = event.x;
}

function attachListeners() {
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mouseover', handleMouseover);
  });
  document.querySelectorAll('.box').forEach(function(box){
      box.addEventListener('mouseout', handleMouseout);
    });
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mousedown', handleGrabBox);
  });
  document.addEventListener('mousemove', handleMousemove);
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mouseup', handleDropBox);
  });
  document.querySelector('#addButton').addEventListener('click', addBox);
  document.querySelector('#removeButton').addEventListener('click', removeSelectedBoxes);
}
document.addEventListener("DOMContentLoaded", attachListeners);
