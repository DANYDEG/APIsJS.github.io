const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d");

// ctx.fillRect(20, 20, 80, 80);
// ctx.clearRect(30, 30, 60, 60);
// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(40, 40, 40, 40);

// ctx.fillStyle = "rgb(0,0,255)";

// ctx.beginPath();
// ctx.moveTo(60, 50);
// ctx.lineTo(75, 70);
// ctx.lineTo(45, 70);
// ctx.fill();
// ctx.beginPath();

// ctx.arc(60,63,7,0,Math.PI * 2, true);
// ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgb(100,80,40)";
ctx.fillRect(0, 80, 250, 160);

ctx.beginPath();
ctx.fillStyle = "rgb(0,107,179)";
ctx.fillRect(20, 100, 70, 70);

ctx.beginPath();
ctx.fillStyle = "rgb(100,0,0)";
ctx.moveTo(0, 80);
ctx.lineTo(250, 80);
ctx.lineTo(125, 4);
ctx.fill();



//cuerpo
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(100, 210, 200, 150);

//patitas
ctx.arc(128, 355, 28, 28, Math.PI * 2, true);
ctx.arc(180, 355, 28, 28, Math.PI * 2, true);
ctx.arc(230, 360, 28, 28, Math.PI * 2, true);
ctx.arc(272, 355, 28, 28, Math.PI * 2, true);

ctx.arc(104, 255, 28, 0, Math.PI * 2, true);
ctx.arc(295, 255, 28, 500, Math.PI * 2, true);


//cabeza
ctx.arc(200,200,100,0, Math.PI * 2, true);
ctx.fill();



//ojos
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(150,170,20,0, Math.PI *2, true);
ctx.fill();
ctx.arc(250,170,20,0, Math.PI *2, true);
ctx.fill();


//boca 
ctx.beginPath();
ctx.arc(200,220,18,0, Math.PI*2, false);
ctx.fill();

