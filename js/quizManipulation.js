function allowDrop(ev) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev
    .target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = 12
var outer2 = 2
var outer3 = 3
var mida = 4
var midb = 6
var midc = 8
var inner = 7

function testAnswers(){

if (Boolean(outer1 == 1 || outer1 == 2 || outer1 == 3) === true) {
  givenAnswers[0] = "true";
  } else {
  givenAnswers[0] = "false";
  }
if (Boolean(outer2 == 1 || outer2 == 2 || outer2 == 3) === true) {
  givenAnswers[1] = "true";
  } else {
  givenAnswers[1] = "false";
  }
if (Boolean(outer3 == 1 || outer3 == 2 || outer3 == 3) === true) {
  givenAnswers[2] = "true";
  } else {
  givenAnswers[2] = "false";
  }
if (inner == 7) {
  givenAnswers[6] = "true";
  } else {
  givenAnswers[6] = "false";
  }

if (Boolean((outer1 == 1 && outer2 == 2) || (outer1 == 2 && outer2 == 1)) === true) {
    if (mida == 4) {
      givenAnswers[3] = "true";
    } else {givenAnswers[3] = "false"}
    } else if (Boolean((outer1 == 1 && outer2 == 3) || (outer1 == 3 && outer2 == 1)) === true) {
      if (mida == 5) {
        givenAnswers[3] = "true";
      } else {givenAnswers[3] = "false"}
    } else if (Boolean((outer1 == 2 && outer2 == 3) || (outer1 == 3 && outer2 == 2)) === true) {
      if (mida == 6) {
        givenAnswers[3] = "true";
      } else {givenAnswers[3] = "false"}
    } else {
      givenAnswers[3] = "unknown";
    }

if (Boolean((outer1 == 1 && outer3 == 2) || (outer1 == 2 && outer3 == 1)) === true) {
    if (midc == 4) {
      givenAnswers[5] = "true";
    } else {givenAnswers[5] = "false"}
    } else if (Boolean((outer1 == 1 && outer3 == 3) || (outer1 == 3 && outer3 == 1)) === true) {
      if (midc == 5) {
        givenAnswers[5] = "true";
      } else {givenAnswers[5] = "false"}
    } else if (Boolean((outer1 == 2 && outer3 == 3) || (outer1 == 3 && outer3 == 2)) === true) {
      if (midc == 6) {
        givenAnswers[5] = "true";
      } else {givenAnswers[5] = "false"}
    } else {
      givenAnswers[5] = "unknown";
    }

if (Boolean((outer2 == 1 && outer3 == 2) || (outer2 == 2 && outer3 == 1)) === true) {
    if (midb == 4) {
      givenAnswers[4] = "true";
    } else {givenAnswers[4] = "false"}
    } else if (Boolean((outer2 == 1 && outer3 == 3) || (outer2 == 3 && outer3 == 1)) === true) {
      if (midb == 5) {
        givenAnswers[4] = "true";
      } else {givenAnswers[4] = "false"}
    } else if (Boolean((outer2 == 2 && outer3 == 3) || (outer2 == 3 && outer3 == 2)) === true) {
      if (midb == 6) {
        givenAnswers[4] = "true";
      } else {givenAnswers[4] = "false"}
    } else {
      givenAnswers[4] = "unknown";
    }
    console.log(givenAnswers)
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
  document.querySelector('#checkButton').addEventListener('click', testAnswers);
}
document.addEventListener("DOMContentLoaded", attachListeners);
