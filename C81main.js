var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    //taking color from input box//
    //additional activity start//

    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ",Y ="+ mouse_y);
    circle(mouse_x , mouse_y);
}

//function circle//

function circle(mouse_X , mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(mouse_x, mouse_y, 40, 0 ,2*Math.PI);
ctx.stroke();
}

function clearcanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.arc(135, 249, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.arc(178, 308, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(230, 260, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(281, 309, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(331, 257, 40, 0, 2 * Math.PI);
ctx.stroke();