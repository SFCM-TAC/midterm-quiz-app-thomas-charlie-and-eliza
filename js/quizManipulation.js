
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


    if (event.target.childElementCount == 0 && event.target.classList.contains("vd") == true) {
      console.log(event.target.childElementCount)
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
        default:
          break;
      }
    } else {
if (event.target.id == "answers") {
        ev.target.appendChild(document.getElementById(data));
        regionID = (event.target.id);
        console.log(regionID)
        document.getElementById(boxID).style.position = 'relative';
        document.getElementById(boxID).style.left = "0px";
        document.getElementById(boxID).style.top = '0px';
        document.getElementById(boxID).style.transform = 'rotate(0deg)'
        document.getElementById(boxID).style.margin = "10px 63px";
    }
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
  if ((givenAnswers[0] == "true") && (givenAnswers[1] == "true") && (givenAnswers[2] == "true") && (givenAnswers[3] == "true") && (givenAnswers[4] == "true") && (givenAnswers[5] == "true") && (givenAnswers[6] == "true")) {
        document.getElementById('correct').style.display = "block";
    } else {
        document.getElementById('wrong').style.display = "block";
    }
    console.log(givenAnswers)
}

function hideResponse() {
  document.getElementById('correct').style.display = "none";
  document.getElementById('wrong').style.display = "none";
  document.getElementById('outer1').style.backgroundColor = '#814374';
  document.getElementById('outer2').style.backgroundColor = '#814374';
  document.getElementById('outer3').style.backgroundColor = '#814374';
  document.getElementById('mida').style.backgroundColor = '#B7695C';
  document.getElementById('midb').style.backgroundColor = '#B7695C';
  document.getElementById('midc').style.backgroundColor = '#B7695C';
  document.getElementById('inner').style.backgroundColor = '#CDBB79';

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
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('ondrop', drop);
  });
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('ondragover', allowDrop);
  });
  // document.querySelectorAll('.vd').forEach(function(vd){
  //     vd.addEventListener('ondragleave', dragOut);
  // });
  document.querySelector('#checkButton').addEventListener('click', testAnswers);

}

document.addEventListener("DOMContentLoaded", attachListeners);


function reload() {
  location.reload();
}


function colorAnswers() {
  testAnswers();
  var i;
  for(i = 0; i < givenAnswers.length; i++) {
    switch (i) {
      case 0:
      console.log('0')
        switch (givenAnswers[0]) {
          case "true":
          console.log('true')
            document.getElementById("outer1").style.backgroundColor = '#51A39D';
            break;
          case "false":
            document.getElementById("outer1").style.backgroundColor = '#a35157';
            break;
          case "unknown":
            document.getElementById('outer1').style.backgroundColor = '#a39d51';
            break;
          };
        break;

      case 1:
      console.log('1')
        switch (givenAnswers[1]) {
          case "true":
            document.getElementById("outer2").style.backgroundColor = '#51A39D';
              console.log("true")
              break;
          case "false":
            document.getElementById("outer2").style.backgroundColor = '#a35157';
              console.log("False")
              break;
          case "unknown":
            document.getElementById('outer2').style.backgroundColor = '#a39d51';
              console.log("Unknown")
              break;
            };
        break;

      case 2:
        switch (givenAnswers[2]) {
          case "true":
            document.getElementById("outer3").style.backgroundColor = '#51A39D';
            break;
          case "false":
            document.getElementById("outer3").style.backgroundColor = '#a35157';
            break;
          case "unknown":
            document.getElementById('outer3').style.backgroundColor = '#a39d51';
            break;
            };
        break;

      case 3:
        switch (givenAnswers[3]) {
          case "true":
            document.getElementById("mida").style.backgroundColor = '#64c1bb';
            break;
          case "false":
            document.getElementById("mida").style.backgroundColor = '#c1646a';
            break;
          case "unknown":
            document.getElementById('mida').style.backgroundColor = '#c1bb64';
            break;
            };
        break;

      case 4:
        switch (givenAnswers[4]) {
          case "true":
            document.getElementById("midb").style.backgroundColor = '#64c1bb';
            break;
          case "false":
            document.getElementById("midb").style.backgroundColor = '#c1646a';
            break;
          case "unknown":
            document.getElementById('midb').style.backgroundColor = '#c1bb64';
            break;
            };
        break;

      case 5:
        switch (givenAnswers[5]) {
          case "true":
            document.getElementById("midc").style.backgroundColor = '#64c1bb';
            break;
          case "false":
            document.getElementById("midc").style.backgroundColor = '#c1646a';
            break;
          case "unknown":
            document.getElementById('midc').style.backgroundColor = '#c1bb64';
            break;
            };
        break;

      case 6:
        switch (givenAnswers[6]) {
          case "true":
            document.getElementById("inner").style.backgroundColor = '#51A39D';
            break;
          case "false":
            document.getElementById("inner").style.backgroundColor = '#a35157';
            break;
          case "unknown":
            document.getElementById('inner').style.backgroundColor = '#a39d51';
            break;
            };
        break;

    };
  };
};



// case "false":
//   document.getElementById(ID).style.background = 'red';
//   break;
// case "unknown":
//   document.getElementById(BoxID).style.background = 'yellow';
//   break;
