
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = {};
};

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(couleur, epaisseur, xInit, yInit, xFin, yFin) {
    Forme.call(this.couleur, this.epaisseur);
    this.largeur = Maths.abs(xFin - xInit);
    this.hauteur = Maths.abs(yFin - yInit);
    this.xOrigine = xInit;
    this.yOrigine = yInit;
};
Rectangle.prototype = new Forme();

function Line(couleur, epaisseur, xInit, yInit, xFin, yFin) {
    Forme.call(this.couleur, this.epaisseur);
    this.xDeb = xInit;
    this.yDeb = yInit;
    this.xFin = xFin;
    this.yFin = yFin;
};
Line.prototype = new Forme();