

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//canvas document https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

ctx.translate(canvas.width/2, canvas.height/2);
ctx.beginPath();

    ctx.moveTo(0,0);
    ctx.lineTo(200,200);

    ctx.moveTo(0,0);
    ctx.lineTo(-200,-200);

    ctx.moveTo(0,0);
    ctx.lineTo(-200,200);



    ctx.moveTo(0,0);
    ctx.lineTo(200,-200);

ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90,130)

ctx.lineTo(95,25)

ctx.lineTo(150,80)

ctx.lineTo(205,25)

ctx.lineTo(210,130)

ctx.lineWidth = 15

ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.save();
ctx.fillStyle = "red";
ctx.fillRect(0,0,100,200);
ctx.closePath();

ctx.beginPath();
ctx.arc(-50,-50,20,0,2*Math.PI)
ctx.restore();
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(-150,-150,20,0, Math.PI)
ctx.fill();
ctx.closePath();
