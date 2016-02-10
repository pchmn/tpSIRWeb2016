
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0; //1 = Line; 0 = Rectangle

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(){
		switch(this.currEditingMode) {
	    case editingMode.rect:
	        this.currentShape = new Rectangle(this.DnD.xInit, this.DnD.yInit, 1, 1, this.currLineWidth, this.currColour);
	        break;
	    case editingMode.line:
	        break;
	    default:
	    	break;
		}
	}.bind(this);
	this.onInteractionUpdate = function(){
		switch(this.currEditingMode) {
	    case editingMode.rect:
	        this.currentShape = new Rectangle(this.DnD.xInit, this.DnD.yInit, this.DnD.xFin - this.DnD.xInit, this.currLineWidth, this.currColour);
	        break;
	    case editingMode.line:
	        break;
	    default:
	    	break;
		}
		
		drawing.paint(ctx, canvas);
	}.bind(this);
	
	this.onInteractionEnd = function(){
		drawing.addForm(this.currentShape)
		drawing.paint(ctx, canvas);
	}.bind(this);
}


