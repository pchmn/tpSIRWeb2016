
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// classe Drawing
function Drawing() {
    this.formes = [];

    this.addForme = function(forme) {
        this.formes.push(forme);
    }.bind(this);

    this.getForms = function() {
        return this.formes;
    }.bind(this);

    this.deleteForm = function(index) {
        if(index > -1) {
            this.formes.splice(index, 1);
        }
    }.bind(this);

    this.clearForms = function() {
        this.formes.length = 0;
    }.bind(this);
};

// classe Forme
function Forme(epaisseur, couleur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;

    // Getters
    this.getCouleur = function() {
        return this.couleur;
    }.bind(this);

    this.getEpaisseur = function() {
        return this.epaisseur;
    }.bind(this);

    // Setters
    this.setCouleur = function(nouvCouleur) {
        this.couleur = nouvCouleur;
    }.bind(this);
};

// Classe Rectangle
function Rectangle(xInit, yInit, largeur, hauteur, epaisseur, couleur) {
    Forme.call(this, epaisseur, couleur);
    this.xInit = xInit;
    this.yInit = yInit;
    this.largeur = largeur;
    this.hauteur = hauteur;

    // Getters
    this.getInitX = function() {
        return this.xInit;
    }.bind(this);

    this.getInitY = function() {
        return this.yInit;
    }.bind(this);

    this.getLargeur = function() {
        return this.largeur;
    }.bind(this);

    this.getHauteur = function() {
        return this.hauteur;
    }.bind(this);

    // Setters
    this.setLargeur = function(largeur) {
        this.largeur = largeur;
    }.bind(this);

    this.setHauteur = function(hauteur) {
        this.hauteur = hauteur;
    }.bind(this);

    // toString()
    this.toString = function() {
        return "Rectangle (" + this.getInitX() + ", " + this.getInitY() + ", " + this.getLargeur() + ", " + this.getHauteur() + ")";
    }.bind(this);
};
Rectangle.prototype = new Forme();

// classe Line
function Line(xInit, yInit, xFin, yFin, epaisseur, couleur) {
    Forme.call(this, epaisseur, couleur);
    this.xInit = xInit;
    this.yInit = yInit;
    this.xFin = xFin;
    this.yFin = yFin;

    // Getters
    this.getInitX = function() {
        return this.xInit;
    }.bind(this);

    this.getInitY = function() {
        return this.yInit;
    }.bind(this);

    this.getFinalX = function() {
        return this.xFin;
    }.bind(this);

    this.getFinalY = function() {
        return this.yFin;
    }.bind(this);

    // Setters
    this.setFinalX = function(xFin) {
        this.xFin = xFin;
    }.bind(this);

    this.setFinalY = function(yFin) {
        this.yFin = yFin;
    }.bind(this);

    // toString()
    this.toString = function() {
        return "Line (" + this.getInitX() + ", " + this.getInitY() + ", " + this.getFinalX() + ", " + this.getFinalY() + ")";
    }.bind(this);
};
Line.prototype = new Forme();

// classe Cercle
function Circle(xOrig, yOrig, rayon, epaisseur, couleur) {
    Forme.call(this, epaisseur, couleur);
    this.xOrig = xOrig;
    this.yOrig = yOrig;
    this.rayon = rayon;

    // Getters
    this.getOrigX = function() {
        return this.xOrig;
    }.bind(this);

    this.getOrigY = function() {
        return this.yOrig;
    }.bind(this);

    this.getRayon = function() {
        return this.rayon;
    }.bind(this);

    // Setters
    this.setRayon = function(rayon) {
        this.rayon = rayon;
    }.bind(this);

    // toString
    this.toString = function() {
        return "Circle (" + this.getOrigX() + ", " + this.getOrigY() + ", " + this.getRayon() + ")";
    }.bind(this);

};
Circle.prototype = new Forme();