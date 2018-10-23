
var newColor = ""

function changeBoxColors(color) {
  var boxClass = document.getElementsByClassName("box")
  if (boxClass.length > 1) {
    for (var i=0; i<boxClass.length; i++) {
      switch (color) {
        case "red":
          boxClass[i].classList.remove("yellow", "blue", "grey");
          boxClass[i].classList.add("red");
          newColor = "red";
          break;

        case "blue":
          boxClass[i].classList.remove("yellow", "red", "grey");
          boxClass[i].classList.add("blue");
          newColor = "blue";
          break;

        case "yellow":
          boxClass[i].classList.remove("blue", "red", "grey");
          boxClass[i].classList.add("yellow");
          newColor = "yellow";
          break;

        default:
          boxClass[i].classList.remove("blue", "yellow", "red")
    }
  }
}
  console.log('Selected color: ' + color);
}

function addBox() {
  console.log('Adding a new box');

  var newBoxElement = document.createElement('div');
    newBoxElement.setAttribute("class", "box");
    if (Boolean(newColor) == true) {
      newBoxElement.classList.add(newColor)
    } else {
      newBoxElement.classList.add("grey")
    }
    var position = document.getElementById("boxes");
    position.appendChild(newBoxElement);

  newBoxElement.addEventListener('click', handleBoxClick);
}

var selectedBoxes = document.getElementsByClassName("box-selected");
function removeSelectedBoxes() {
  var parent = document.getElementById("boxes");
  while (0<selectedBoxes.length) {
    parent.removeChild(selectedBoxes[0]);
}
  console.log('Removing selected boxes');
}

function handleMouseover(event) {
  var boxElement = event.target;
  boxElement.classList.add("box-selected")
  // if (boxElement.classList.contains("box-selected") === false) {
  //   boxElement.classList.add("box-selected");
  // } else if (boxElement.classList.contains("box-selected") === true) {
  //   boxElement.classList.remove("box-selected")
  // }
  console.log('Selecting box: ', boxElement);
}

function handleMouseout(event) {
  var boxElement = event.target;
  boxElement.classList.remove("box-selected")
  // if (boxElement.classList.contains("box-selected") === false) {
  //   boxElement.classList.add("box-selected");
  // } else if (boxElement.classList.contains("box-selected") === true) {
  //   boxElement.classList.remove("box-selected")
  // }
  console.log('Selecting box: ', boxElement);
}

function handleColorSelect(event) {
  changeBoxColors(event.target.id);
}

function attachListeners() {
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mouseover', handleMouseover);
  });
  document.querySelectorAll('.box').forEach(function(box){
      box.addEventListener('mouseout', handleMouseout);
    });
  document.querySelectorAll('.color-selector').forEach(function(color){
    color.addEventListener('click', handleColorSelect);
  });
  document.querySelector('#addButton').addEventListener('click', addBox);
  document.querySelector('#removeButton').addEventListener('click', removeSelectedBoxes);
}
document.addEventListener("DOMContentLoaded", attachListeners);
