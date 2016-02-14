
var editingMode = { rect: 0, line: 1, circle: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.circle;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
    // pour appeler les méthodes d'instance
    var thisIstance = this;
    // variable utilisée pour mettre en évidence la sélection
    var previousColor;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	// changer forme du dessin
	this.changeEditingMode = function(elt) {
        console.log("forme", elt.target.id)
        switch(elt.target.id) {
            case "butLine":
                console.log("mode", this.currEditingMode)
                this.currEditingMode = editingMode.line;
                console.log("mode after", this.currEditingMode)
                break;

            case "butRect":
                this.currEditingMode = editingMode.rect;
                break;

            case "butCircle":
                this.currEditingMode = editingMode.circle;
                break;

            default:
                break;
        }
	}.bind(this);

	// modifier épaisseur du trait
	this.changeLineWidth = function(elt) {
		this.currLineWidth = elt.target.value;
	}.bind(this);

	// modifier couleur du trait
	this.changeColor = function(elt) {
		this.currColour = elt.target.value;
	}.bind(this);

	// supprimer toutes les formes du canvas
	this.clearCanvas = function() {
		drawing.clearForms();
		ctx.fillStyle = '#F0F0F0'; // set canvas' background color
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// maj de la liste
        this.updateListForms();
	}.bind(this);

    // supprimer une forme
    this.removeForm = function(elt) {
        var index = Number(elt.target.id);

        // suppression de la forme
        drawing.deleteForm(Number(index));
        this.updateListForms();

        // maj du canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx, canvas);
    }.bind(this);

	// historique des formes
	this.updateListForms = function() {
		// vider la liste des formes
        while(listForms.firstChild) {
            listForms.removeChild(listForms.firstChild);
        }

        var i = 0;
        drawing.getForms().forEach(function(forme) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.setAttribute("class", "glyphicon glyphicon-remove-sign");
            span.setAttribute("id", String(i));
            var text = document.createTextNode(forme.toString());

            li.appendChild(span);
            li.appendChild(text);

            listForms.appendChild(li);

            // ajout du listener pour la suppression
            span.addEventListener('click', thisIstance.removeForm.bind(this));
            // ajout des listeners pour la surbrillance de la forme
            li.addEventListener('mouseover', function(elt) {
                if(!(elt.target.firstChild)) {
                    var index = Number(elt.target.id)
                }
                else {
                    var index = Number(elt.target.firstChild.id);
                }
                console.log("index", index)
                var currentform = drawing.formes[index];
                previousColor = currentform.getCouleur();
                // changer couleur de la forme sélectionnée
                currentform.setCouleur("red");

                // maj du canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawing.paint(ctx, canvas);
            });
            li.addEventListener('mouseout', function(elt) {
                if(!(elt.target.firstChild)) {
                    var index = Number(elt.target.id)
                }
                else {
                    var index = Number(elt.target.firstChild.id);
                }
                // réinitialisation de la couleur
                drawing.formes[index].setCouleur(previousColor);
                // maj du canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawing.paint(ctx, canvas);
            });

            i++;
        });

	}.bind(this);

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	// création de la forme de base
	this.onInteractionStart = function(DnD) {

        switch(this.currEditingMode) {
            case editingMode.rect:
                this.currentShape = new Rectangle(DnD.xInit, DnD.yInit, 0, 0, this.currLineWidth, this.currColour);
                break;

            case editingMode.line:
                this.currentShape = new Line(DnD.xInit, DnD.yInit, DnD.xInit, DnD.yInit, this.currLineWidth, this.currColour);
                break;

            case editingMode.circle:
                this.currentShape = new Circle(DnD.xInit, DnD.yInit, 0, this.currLineWidth, this.currColour);
                break;

            default:
                break;
        }

	}.bind(this);

	// maj des caractéristiques de la forme
	this.onInteractionUpdate = function(DnD) {

        switch(this.currEditingMode) {
            case editingMode.rect:
                var largeur = DnD.xFin - DnD.xInit;
                var hauteur = DnD.yFin - DnD.yInit;
                this.currentShape.setLargeur(largeur);
                this.currentShape.setHauteur(hauteur);
                break;

            case editingMode.line:
                this.currentShape.setFinalX(DnD.xFin);
			    this.currentShape.setFinalY(DnD.yFin);
                break;

            case editingMode.circle:
                var a = Math.max(DnD.xFin, DnD.xInit) - Math.min(DnD.xFin, DnD.xInit);
                var b = Math.max(DnD.yFin, DnD.yInit) - Math.min(DnD.yFin, DnD.yInit);

                // pythagore
                var rayon = Math.sqrt(a*a + b*b);
                rayon = Math.round(rayon * 100) / 100;

                this.currentShape.setRayon(rayon);
                break;

            default:
                break;
        }

        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

	}.bind(this);

	// création de la forme dans le canvas
	this.onInteractionEnd = function() {
		drawing.addForme(this.currentShape);
		drawing.paint(ctx, canvas);
		this.updateListForms();
	}.bind(this);

	// EventListeners
	buttonLine.addEventListener('click', this.changeEditingMode.bind(this));
	buttonRectangle.addEventListener('click', this.changeEditingMode.bind(this));
    buttonCircle.addEventListener('click', this.changeEditingMode.bind(this));
	spinnerWidth.addEventListener('change', this.changeLineWidth.bind(this));
	color.addEventListener('change', this.changeColor.bind(this));
	clearCanvas.addEventListener('click', this.clearCanvas);
};


