
const B1 = 1
var RegionID = null
var BoxID = null
var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = 12
var outer2 = 2
var outer3 = 3
var mida = 4
var midb = 6
var midc = 8
var inner = 7

function allowDrop(ev) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev
    .target.id);
    return BoxID = event.target.id;
    console.log(BoxID)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    RegionID = (event.target.id);
    switch (RegionID) {
      case "outer1":
        outer1 = BoxID;
        break;
      case "outer2":
        outer2 = BoxID;
        break;
      case "outer3":
        outer3 = BoxID;
        break;
      case "mida":
        mida = BoxID;
        break;
      case "midb":
        midb = BoxID;
        break;
      case "midc":
        midc = BoxID;
        break;
      case "inner":
        inner = BoxID;
        break;
    }
}

<<<<<<< HEAD

var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = 12
var outer2 = 2
var outer3 = 3
var mida = 4
var midb = 6
var midc = 8
var inner = 7
=======
>>>>>>> e0c992eb8aaabf9f0c9970a0628da519f5b2915d

function testAnswers() {

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

function attachListeners() {
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mouseover', handleMouseover);
  });
  document.querySelectorAll('.box').forEach(function(box){
      box.addEventListener('mouseout', handleMouseout);
    });

  document.querySelector('#checkButton').addEventListener('click', testAnswers);
}
document.addEventListener("DOMContentLoaded", attachListeners);
