
var regionID = null
var boxID = null
var givenAnswers = [null, null, null, null, null, null, null]
var outer1 = null
var outer2 = null
var outer3 = null
var mida = null
var midb = null
var midc = null
var inner = null

function test() {
  console.log("test success")
}

function allowDrop(ev) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev
    .target.id);
    return boxID = event.target.id;
    console.log(boxID)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    regionID = (event.target.id);
    console.log(regionID)
    switch (regionID) {
      case "outer1":
        outer1 = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "120px";
        document.getElementById(boxID).style.top = '150px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "0px";
        document.getElementById(regionID).ondrop = 'null';
        break;
      case "outer2":
        outer2 = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "220px";
        document.getElementById(boxID).style.top = '150px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "outer3":
        outer3 = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "180px";
        document.getElementById(boxID).style.top = '280px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "mida":
        mida = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "60px";
        document.getElementById(boxID).style.top = '120px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "midb":
        midb = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "280px";
        document.getElementById(boxID).style.top = '130px';
        document.getElementById(boxID).style.transform = 'rotate(-6deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "midc":
        midc = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "130px";
        document.getElementById(boxID).style.top = '340px';
        document.getElementById(boxID).style.transform = 'rotate(8deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "inner":
        inner = boxID;
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "165px";
        document.getElementById(boxID).style.top = '75px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "0px";
        break;
      case "answers":
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "0px";
        document.getElementById(boxID).style.top = '0px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "10px 50px";
        break;
    }
}

// function dragOut(event) {
//
//       // document.getElementById(regionID).addEventListener('ondragover', allowDrop);
//
//       if ( event.target.id == regionID ) {
//         // document.getElementById(regionID).addEventListener('drop', drop);
//         document.getElementById(regionID).drop = "drop(event)";
//         console.log('test')
//     }
//
// };

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
  // document.querySelectorAll('.vd').forEach(function(vd){
  //     vd.addEventListener('ondragleave', dragOut);
  // });
  document.querySelector('#checkButton').addEventListener('click', testAnswers);
}
document.addEventListener("DOMContentLoaded", attachListeners);
