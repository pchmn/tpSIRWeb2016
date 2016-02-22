# TP Web : Javascript et HTML5

### Présentation
Ce projet permet de dessiner des formes (ligne, rectangle, cercle), en choisissant l'épaisseur et la couleur des traits, dans un navigateur web. Il y a également la possiblité d'avoir la liste des formes créées et de supprimer celles de son choix.<br>
Le projet est réalisé en HTML5 et JavaScript.

### Utilisation
Il suffit de récupérer le projet et lancer de le fichier canvas.html avec le navigateur de son choix.

### Description des fichiers
* <b>canvas.html / canvas.css :</b><br>
  Interface pour l'utilisateur

* <b>controller.js :</b><br>
  C'est le controlleur. C'est lui qui effectue les traitements. En fonction des intéractions de l'utilisateur il va appeler les bonnes méthodes du modèle (model.js) et de la vue (view.js). 
Il gère la création des formes grâce à 3 méthodes principales :<br>
• <i>onInteractionStart() :</i> crée la forme selon le choix de l'utilisateur<br>
• <i>onInteractionUpdate() :</i> modifie la taille de la forme en fonction des mouvements de souris de l'utilisateur (utilisation de drag n drop de interaction.js)<br>
• <i>onInteractionEnd() :</i> crée définitivement la forme et l'affiche sur le canvas lorsque l'utilisateur relâche la souris <br>
Le controlleur gère également les options choisies par l'utilisateur (couleur, épaisseur) et la suppression des formes

* <b>interaction.js :</b><br>
  C'est le fichier qui gère les mouvements de la souris en créant une fonction de drag'n drop

* <b>main.js :</b><br>
  C'est le fichier qui initialise le canvas, et qui récupère dans des variables tous les widgets de l'interface

* <b>models.js :</b><br>
  C'est le fichier qui gère les modèles. Il décrit les caractéristiques de chaque forme en créant des classes : Drawing qui représente le canvas, Forme qui réprésente une forme et Rectangle, Line et Circle qui héritent toutes de Forme

* <b>view.js :</b><br>
  C'est la vue. Ce fichier permet de créer les formes grâce à des méthodes paint() propre à chaque classe du modèle.
