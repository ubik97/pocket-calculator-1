var input = "";
var p = document.getElementById('output')
var digcount = input.length;
var addnum1;
var optype;
var sum;
var status = "clean";

function addition() {
  addnum1 = input;
  console.log(addnum1);
  input = "";
  console.log(addnum1);
  console.log("fuck");
  optype = 1;
}

function equals() {
  switch(optype) {
    case 1:
      status = "dirty";
      document.getElementById('output').innerHTML = eval(Number(input) + Number(addnum1));
      console.log(status);
      break;

    case 2:



  }
}



//console.log(eval('2 + 2')); will log 4 to the console


//BASIC KEYPAD INPUT FUNCTIONS
function number1() {
  if (status != "clean") {
    input = "1";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
    console.log(status);
  if (input.length>=9) {
  input = input + "1";
  input = input.substring(0,9);
  } else {
    input = input + "1";
  }

}

document.getElementById('output').innerHTML = input;
}

function number2() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "2";
  input = input.substring(0,9);
  } else {
    input = input + "2";
  }
}

document.getElementById('output').innerHTML = input;
}

function number3() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "3";
  input = input.substring(0,9);
  } else {
    input = input + "3";
  }
  }

  document.getElementById('output').innerHTML = input;
}

function number4() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "4";
  input = input.substring(0,9);
  } else {
    input = input + "4";
  }
}

document.getElementById('output').innerHTML = input;
}

function number5() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "5";
  input = input.substring(0,9);
  } else {
    input = input + "5";
  }
}

document.getElementById('output').innerHTML = input;
}

function number6() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "6";
  input = input.substring(0,9);
  } else {
    input = input + "6";
  }
}

document.getElementById('output').innerHTML = input;
}

function number7() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "7";
  input = input.substring(0,9);
  } else {
    input = input + "7";
  }
}

document.getElementById('output').innerHTML = input;
}

function number8() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "8";
  input = input.substring(0,9);
  } else {
    input = input + "8";
  }
}

document.getElementById('output').innerHTML = input;
}

function number9() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "9";
  input = input.substring(0,9);
  } else {
    input = input + "9";
  }
  }

  document.getElementById('output').innerHTML = input;
}

function number0() {
  if (status="dirty") {
    input = "";
    document.getElementById('output').innerHTML = input;
    status= "clean";
  }

  if (status!="dirty") {
  if (input.length>=9) {
  input = input + "0";
  input = input.substring(0,9);
  } else {
    input = input + "0";
  }
  }

  document.getElementById('output').innerHTML = input;
}

function dec() {
  if (input.length>=9) {
  input = input + ".";
  input = input.substring(0,9);
  } else {
    input = input + ".";
  }
document.getElementById('output').innerHTML = input;
}

function reset() {
  input = "";
  document.getElementById('output').innerHTML = input;
}
