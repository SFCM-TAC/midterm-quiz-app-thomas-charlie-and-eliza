
var RegionID = null
var BoxID = null
var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = null
var outer2 = null
var outer3 = null
var mida = null
var midb = null
var midc = null
var inner = null

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
    console.log(RegionID)
    switch (RegionID) {
      case "outer1":
        outer1 = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "120px";
        document.getElementById(BoxID).style.top = '150px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "outer2":
        outer2 = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "220px";
        document.getElementById(BoxID).style.top = '150px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "outer3":
        outer3 = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "180px";
        document.getElementById(BoxID).style.top = '280px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "mida":
        mida = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "60px";
        document.getElementById(BoxID).style.top = '120px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "midb":
        midb = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "280px";
        document.getElementById(BoxID).style.top = '130px';
        document.getElementById(BoxID).style.transform = 'rotate(-6deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "midc":
        midc = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "130px";
        document.getElementById(BoxID).style.top = '340px';
        document.getElementById(BoxID).style.transform = 'rotate(8deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "inner":
        inner = BoxID;
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "165px";
        document.getElementById(BoxID).style.top = '75px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "0px";
        break;
      case "answers":
        document.getElementById(BoxID).style.position = 'relative';
        document.getElementById(BoxID).style.left = "0px";
        document.getElementById(BoxID).style.top = '0px';
        document.getElementById(BoxID).style.transform = 'rotate(0deg)'
        document.getElementById(BoxID).style.margin = "10px 50px";
        break;
    }
}

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
