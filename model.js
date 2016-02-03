
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(formes) {
    this.formes = formes;

    this.getForms = function() {
        return this.formes;
    };
};

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(xInit, yInit, largeur, hauteur, epaisseur, couleur) {
    Forme.call(this, couleur, epaisseur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.xOrigine = xInit;
    this.yOrigine = yInit;

    this.getInitX = function() {
        return this.xOrigine;
    }.bind(this);

    this.getInitY = function() {
        return this.yOrigine;
    }.bind(this);

    this.getFinalX = function() {
        return Math.abs(this.xOrigine + this.largeur);
    }.bind(this);

    this.getFinalY = function() {
        return Math.abs(this.yOrigine + this.hauteur);
    }
};
Rectangle.prototype = new Forme();

function Line(xInit, yInit, xFin, yFin, epaisseur, couleur) {
    Forme.call(this.couleur, this.epaisseur);
    this.xDeb = xInit;
    this.yDeb = yInit;
    this.xFin = xFin;
    this.yFin = yFin;


    this.getXInit = function(){
    	return this.xDeb;
    }.bind(this);

    this.setXInit = function(newXDeb){
    	this.xDeb = newXDeb;
    }.bind(this);
    this.getYDeb = function(){
    	return this.yDeb;
    }.bind(this);
    this.setYInit = function(newYDeb){
    	this.yDeb = newYDeb;
    }.bind(this);
    this.getXFin = function(){
    	return this.xFin;
    }.bind(this);
   	this.setXFin = function(newXFin){
    	this.xFin = newXFin;
    }.bind(this);
    this.getYFin = function(){
    	return this.yFin;
    }.bind(this);
    this.setYFin = function(newYFin){
    	this.yFin = newYFin;
    }.bind(this);
};
Line.prototype = new Forme();