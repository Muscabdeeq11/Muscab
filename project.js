
function ch2() {
  let codeString = `var num1 = 0, num2 = 0;
num1 = Number("35");
num2 = Number.parseInt("237");
var str = "";
var num3 = 125;
str = num3.toString();
console.log(str);`;
  document.getElementById("hh").innerHTML = `<pre>${codeString}
<button onclick="runChapterTwo()">Run</button></pre>`;
  document.getElementById("result").innerHTML = "";
}

function runChapterTwo() {
  let num1 = 0, num2 = 0;
  num1 = Number("35");
  num2 = Number.parseInt("237");
  let str = "";
  let num3 = 125;
  str = num3.toString();
  document.getElementById("result").innerHTML =
    "num1 = " + num1 + "<br>num2 = " + num2 + "<br>str = " + str;
}

function ch3() {
  let codeString = `let a = 5;
let b = 10;
a = a + b;
b = a - b;
a = a - b;
let temp = a;
a = b;
b = temp;
console.log("After swapping: a = " + a + ", b = " + b);`;
  document.getElementById("hh").innerHTML = `<pre>${codeString}
<button onclick="runChapterThree()">Run</button></pre>`;
  document.getElementById("result").innerHTML = "";
}

function runChapterThree() {
  let a = 5, b = 10;
  a = a + b; b = a - b; a = a - b;
  let temp = a; a = b; b = temp;
  document.getElementById("result").innerHTML =
    "After swapping: a = " + a + ", b = " + b;
}

function ch4() {
  let codeString = `for (let i=0; i<3; i++){
  for (let j=0; j<3; j++){
    console.log(\`(\${i}, \${j})\`);
  }
}
for (let i=0; i<5; i++){
  if(i === 3) break;
  console.log(i);
}
for (let i=0; i<5; i++){
  if(i === 2) continue;
  console.log(i);
}`;
  document.getElementById("hh").innerHTML = `<pre>${codeString}
<button onclick="runChapterFour()">Run</button></pre>`;
  document.getElementById("result").innerHTML = "";
}

function runChapterFour() {
  let output = "";
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      output += `(${i},${j}) `;
    }
  }
  output += "<br>";
  for (let i=0; i<5; i++) {
    if(i === 3) break;
    output += i + " ";
  }
  output += "<br>";
  for (let i=0; i<5; i++) {
    if(i === 2) continue;
    output += i + " ";
  }
  document.getElementById("result").innerHTML = output;
}

function ch5() {
  let codeString = `function functionName() {
  console.log("Hello!");
}
functionName();

function getGreeting() {
  return "Hello, welcome!";
}
console.log(getGreeting());

function greet(name="Guest") {
  console.log("Hello, " + name + "!");
}
greet();
greet("Ali");

const greet2 = function(name){
  console.log("Hello, " + name + "!");
};
greet2("Ali");

const greet3 = name => console.log("Hello, " + name + "!");
greet3("Sara");`;
  document.getElementById("hh").innerHTML = `<pre>${codeString}
<button onclick="runChapterFive()">Run</button></pre>`;
  document.getElementById("result").innerHTML = "";
}

function runChapterFive() {
  let output = "";
  function functionName() { output += "Hello!<br>"; }
  functionName();
  function getGreeting() { return "Hello, welcome!"; }
  output += getGreeting() + "<br>";
  function greet(name="Guest") { output += "Hello, " + name + "!<br>"; }
  greet(); greet("Ali");
  const greet2 = function(name){ output += "Hello, " + name + "!<br>"; };
  greet2("Ali");
  const greet3 = name => output += "Hello, " + name + "!<br>";
  greet3("Sara");
  document.getElementById("result").innerHTML = output;
}

// Assignments
function AssignmentOne() { alert("Assignment One content goes here."); }
function AssignmentTwo() { alert("Assignment Two content goes here."); }
function AssignmentThree() { alert("Assignment Three content goes here."); }
function AssignmentFour() { alert("Assignment Four content goes here."); }

// About
function About() {
  const info = `
    <strong>Name:</strong> Muscab Deeq Xassan<br>
    <strong>ID:</strong> cs1501028<br>
    <strong>Faculty:</strong> Computer Science & IT<br>
    <strong>University:</strong> Jazeera University <br>
    <strong>Phone:</strong> +252 613434174
  `;
  document.getElementById("hh").innerHTML = "";
  document.getElementById("result").innerHTML = info;
}
