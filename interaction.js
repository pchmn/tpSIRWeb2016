
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
        var coordonnees = getMousePosition(canvas, evt);

        this.press = true;
        this.xInit = coordonnees.x;
        this.yInit = coordonnees.y;
        interactor.onInteractionStart(this);

        console.log("X init : " + this.xInit)
        console.log("Y init : " + this.yInit)
    }.bind(this);

    this.deplacement = function(evt) {
        if(this.press) {
            var coordonnees = getMousePosition(canvas, evt);

            this.xFin = coordonnees.x;
            this.yFin = coordonnees.y;
            interactor.onInteractionUpdate(this);

            console.log("X : " + this.xFin);
            console.log("Y : " + this.yFin);
        }
    }.bind(this);

    this.relachement = function(evt) {
        this.press = false;

        // si xFin et yFin sont à 0, c'est qu'il n'y a pas
        // eu de déplacement. Dans ce cas on ne crée pas de forme
        if(this.xFin == 0 && this.yFin == 0) {
            return;
        }

        interactor.onInteractionEnd();

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