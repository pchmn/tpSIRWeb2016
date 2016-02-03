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

Line.prototype.paint = function(ctx) {
//TODO Manager color

	ctx.fillStyle = this.couleur;
    ctx.beginPath();
    ctx.moveTo(this.getXInit(), this.getYDeb());
    ctx.lineTo(this.getXFin(), this.getYFin());
    ctx.stroke();

};