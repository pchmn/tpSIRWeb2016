
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.xInit = 0;
    this.yInit = 0;
    this.xFin = 0;
    this.yFin = 0;
    this.press = false;

	// Developper les 3 fonctions gérant les événements
    this.pression = function(evt) {
    	interactor.onInteractionStart(this);
        var coordonnees = getMousePosition(canvas, evt);

        this.press = true;
        this.xInit = coordonnees.x;
        this.yInit = coordonnees.y;

        console.log("X init : " + this.xInit)
        console.log("Y init : " + this.yInit)
    }.bind(this);

    this.deplacement = function(evt) {
        if(this.press) {
        	interactor.onInteractionUpdate(this);
            var coordonnees = getMousePosition(canvas, evt);
            console.log("X : " + coordonnees.x);
            console.log("Y : " + coordonnees.y);
        }
    }.bind(this);

    this.relachement = function(evt) {
    	interactor.onInteractionEnd(this);
        var coordonnees = getMousePosition(canvas, evt);

        this.press = false;
        this.xFin = coordonnees.x;
        this.yFin = coordonnees.y;

        console.log("X fin : " + this.xFin)
        console.log("Y fin : " + this.yFin)
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.pression, false);
    canvas.addEventListener('mousemove', this.deplacement, false);
    canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};