
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// widgets
var buttonLine = document.getElementById('butLine');
var buttonRectangle = document.getElementById('butRect');
var buttonCircle = document.getElementById('butCircle');
var spinnerWidth = document.getElementById('spinnerWidth');
var color = document.getElementById('colour');
var clearCanvas = document.getElementById('clearCanvas');
var listForms = document.getElementById('listForms');
var buttonDelete;

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD

//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//console.log(rec)
//rec.paint(ctx);
//var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

