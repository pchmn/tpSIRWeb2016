
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

function Rectangle(couleur, epaisseur, largeur, hauteur) {
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

function Line(couleur, epaisseur, xInit, yInit, xFin, yFin) {
    Forme.call(this.couleur, this.epaisseur);
    this.xDeb = xInit;
    this.yDeb = yInit;
    this.xFin = xFin;
    this.yFin = yFin;


    function getXInit(){
    	return this.xDeb;
    }
    function setXInit(newXDeb){
    	this.xDeb = newXDeb;
    }
    function getYDeb(){
    	return this.yDeb;
    }
    function setYInit(newYDeb){
    	this.yDeb = newYDeb;
    }
    function getXFin(){
    	return this.xFin;
    }
    function setXFin(newXFin){
    	this.xFin = newXFin;
    }
    function getYFin(){
    	return this.yFin;
    }
    function setYFin(newYFin){
    	this.yFin = newYFin;
    }
};
Line.prototype = new Forme();