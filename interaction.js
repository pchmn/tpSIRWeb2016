
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.xInit = 0;
    this.yInit = 0;
    this.xFin = 0;
    this.yFin = 0;

	// Developper les 3 fonctions gérant les événements
    this.pression = function(evt) {

    }.bind(this);

    this.deplacement = function(evt) {

    }.bind(this);

    this.relachement = function(evt) {

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