
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.rect(this.getInitX(), this.getInitY(), this.getLargeur(), this.getHauteur());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Circle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.arc(this.getOrigX(), this.getOrigY(), this.getRayon(), 0, 2*Math.PI);
    ctx.stroke();
};

Forme.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.getCouleur();
    ctx.lineWidth = this.getEpaisseur();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};