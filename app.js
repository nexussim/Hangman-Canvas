const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = 'white';
ctx.fillRect(130, 45, 5, 400);
ctx.fillRect(70, 445, 430, 5);
ctx.fillRect(130, 45, 289, 5);
ctx.fillRect(130, 45, 300, 5);
ctx.fillRect(430, 45, 5, 256);
ctx.fillRect(430, 45, 5, 56);
ctx.beginPath();
ctx.arc(433, 130, 35, 0, 2 * Math.PI);
ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(460, -205, 5, 56);
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.rotate(-45 * Math.PI / 180);
ctx.fillRect(147, 405, 5, 56);
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(515, -94, 5, 56);
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.rotate(-45 * Math.PI / 180);
ctx.fillRect(92, 517, 5, 56);
ctx.setTransform(1, 0, 0, 1, 0, 0);




