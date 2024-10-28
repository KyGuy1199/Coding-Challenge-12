//Task 2: Configure the JavaScript for Drawing Context

const canvas = canvas.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearCanvas');
const shapeRadios = document.getElementsByName('shape');

let isDrawing = false;
let startX, startY;

function getSelectedShape() {
    for(const radio of shapeRadios) {
        if (radio.checked) {
            return radio.Value;
        }
    }
    return 'line';
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const shape = getSelectedShape();
    const color = colorPicker.value;

    ctx.clearRect(0,0, canvaswidthX, canvas.height);

    switch (shape) {
        case 'line':
            drawLine(e.offsetX, e.offsetY, color);
            break;
        
        case 'Rectangle':
                drawRectangle(e.offsetX, e.offsetY, color);
                break;
                case 'line':
                    
        case 'circle':
                drawCircle(e.offsetX, e.offsetY, color);
                    break;
        
    }
});

clearButton.addEventListener('click',() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//Task 3: Implement Shape Drawing Logic

function drawLine(x, y, color) {        //function to draw a line
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawRectangle(x, y, color) {
    const width = x - startX;
    const height = y - startY;
    ctx.fillStyle = color;
    ctxfillRect(startX, startY, width,height);
}

function drawCircle(x, y, color) {
    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    ctx.fill();
}


