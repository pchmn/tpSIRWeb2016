
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.strokeWidth = this.epaisseur;
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this);
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
	Forme.prototype.paint.call(this);
    ctx.beginPath();
    ctx.moveTo(this.getXInit(), this.getYDeb());
    ctx.lineTo(this.getXFin(), this.getYFin());
    ctx.stroke();
};