var num1,num2
var b1,b2,b3,b4
var n1,n2
function setup() {
  createCanvas(600, 600);
  num1 = createInput();
  num1.position(50,200)
  
  num2 = createInput();
  num2.position(250,200) 

  b1 = createButton("ADD");
  b1.position(50,300)
  b1.mousePressed(add);
  b2 = createButton("SUBTRACT");
  b2.position(150,300)
  b2.mousePressed(sub);
  b3 = createButton("MULTIPLY")
  b3.position(250,300)
  b3.mousePressed(mul);
  b4 = createButton("DIVIDE")
  b4.position(400,300)
  b4.mousePressed(div);
}

function draw() {
  background(220);

n1 = parseInt(num1.value())
n2 = parseInt(num2.value())
}

function add(){
  console.log(n1+n2)
}
function sub(){
  console.log(n1-n2)
}
function mul(){
  console.log(n1*n2)
}
function div(){
  console.log(n1/n2)
}
