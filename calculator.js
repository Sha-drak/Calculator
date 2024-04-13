/*const one = 1;
//const two = 2;
//const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;

const zeroZero = ;
const digit = 0;
const digit = 0;
const digit = 0;
const digit = 0;
const digit = 0;

document.addEventListener("DOMContentLoaded", function () {
  const zero = (document.querySelector("#zero").value = 0);
  document.querySelector("#zero").onclick = function () {
    document.querySelector(".Results").innerHTML =zero;
    //const current = document.querySelector(".Results").innerHTML.
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const two = (document.querySelector("#two").value = 2);
  document.querySelector("#two").onclick = function () {
    document.querySelector(".Results").innerHTML =zero,two;
    const current = document.querySelector(".Results").innerHTML;
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const three = (document.querySelector("#three").value =  3);
  document.querySelector("#three").onclick = function () {
    document.querySelector(".Results").innerHTML = 3;
  };
});

function getZero(){
    const zero = (document.querySelector("#zero").value = 0);
}
function getTwo(){
    const zero = (document.querySelector("#two").value = 2);
}
*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#zeroZero").onclick = function () {
    document.querySelector("#Results").innerHTML += "00";
  };
  document.querySelector("#zero").onclick = function () {
    document.querySelector("#Results").innerHTML += 0;
  };
  document.querySelector("#one").onclick = function () {
    document.querySelector("#Results").innerHTML += 1;
  };
  document.querySelector("#two").onclick = function () {
    document.querySelector("#Results").innerHTML += 2;
  };
  document.querySelector("#three").onclick = function () {
    document.querySelector("#Results").innerHTML += 3;
  };
  document.querySelector("#four").onclick = function () {
    document.querySelector("#Results").innerHTML += 4;
  };
  document.querySelector("#five").onclick = function () {
    document.querySelector("#Results").innerHTML += 5;
  };
  document.querySelector("#six").onclick = function () {
    document.querySelector("#Results").innerHTML += 6;
  };
  document.querySelector("#seven").onclick = function () {
    document.querySelector("#Results").innerHTML += 7;
  };
  document.querySelector("#eight").onclick = function () {
    document.querySelector("#Results").innerHTML += 8;
  };
  document.querySelector("#nine").onclick = function () {
    document.querySelector("#Results").innerHTML += 9;
  };
  document.querySelector("#mod").onclick = function () {
    document.querySelector("#Results").innerHTML += "%";
  };
  document.querySelector("#addition").onclick = function () {
    document.querySelector("#Results").innerHTML += "+";
  };
  document.querySelector("#subtraction").onclick = function () {
    document.querySelector("#Results").innerHTML += "-";
  };
  document.querySelector("#multiplication").onclick = function () {
    document.querySelector("#Results").innerHTML += "*";
  };
  document.querySelector("#division").onclick = function () {
    document.querySelector("#Results").innerHTML += "/";
  };
  document.querySelector("#clearAll").onclick = function () {
    document.querySelector("#Results").innerHTML = "";
  };
  document.querySelector("#delete").onclick = function () {
    const current = document.querySelector("#Results").innerHTML;
    document.querySelector("#Results").innerHTML = current.slice(0, -1);
  };
  document.querySelector("#equal").onclick = function () {
    var current = document.querySelector("#Results").innerHTML;
    document.querySelector("#Results").innerHTML = eval(current);
  };
  function displayTime() {
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    document.querySelector("#sure").innerHTML = currentTime;
    requestAnimationFrame(displayTime);
  }
  displayTime();
});

/*function displayTime() {
  var currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  document.getElementById('demo').innerHTML = currentTime;
}
*/

/*document.addEventListener("DOMContentLoaded", function(){
 const main = document.querySelectorAll(".keypad_area").value;
 document.querySelectorAll(".keypad_area").entries().forEach(function(){
   onclick = function(){
     value = main + value;
   }
  })
});*/

/* document.querySelectorAll(".keypad_area button ").onclick = function(){
    document.querySelector("#Results").innerHTML += value;
  }*/
