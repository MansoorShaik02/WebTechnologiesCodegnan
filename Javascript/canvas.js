const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Drawing settings
let isDrawing = false;
let mode = 'draw'; // 'draw' or 'erase'
let lineWidth = 5;
let color = 'black';

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

document.getElementById('draw').addEventListener('click', () => setMode('draw'));
document.getElementById('erase').addEventListener('click', () => setMode('erase'));
document.getElementById('clear').addEventListener('click', clearCanvas);

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    if (mode === 'draw') {
        ctx.strokeStyle = color;
    } else if (mode === 'erase') {
        ctx.strokeStyle = 'white'; // Erase by drawing white
    }

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
}

function setMode(newMode) {
    mode = newMode;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
