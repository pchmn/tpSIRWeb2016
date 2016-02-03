
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
        this.xInit = evt.x;
        this.yInit = evt.y;
        this.press = true;
    }.bind(this);

    this.deplacement = function(evt) {
        if(this.press) {
            var coordonnees = getMousePosition(canvas, evt);
            console.log("X : " + coordonnees.x);
            console.log("Y : " + coordonnees.y);
        }
    }.bind(this);

    this.relachement = function(evt) {
        this.press = false;
        this.xFin = evt.x;
        this.yFin = evt.y;
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