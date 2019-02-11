document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(250, 250, 50, 0, 2 * Math.PI);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = 'purple';
    ctx.fill();

});
