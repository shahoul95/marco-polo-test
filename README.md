# ENVIRONNEMENT

Installer la version 21 de node avec : nvm use 21
Installer npm install --global yarn

# Explication

Fonction App() : Déclare les états locaux utilisant useState pour stocker différentes valeurs nécessaires au jeu, telles que la taille de la grille, les ratios bloqués/occupés, les coordonnées des cases, etc.

Fonction generateCoordinates() : Cette fonction génère les coordonnées du jeu en fonction des paramètres actuels de la grille, du ratio bloqué et du ratio occupé. Elle utilise la fonction calculateCoordinates pour calculer les coordonnées et met à jour les états en conséquence. Fonction onPlay() :

Cette fonction est appelée lorsqu'on clique sur le bouton "Play". Elle utilise setInterval pour exécuter la fonction step() à intervalles réguliers. Elle arrête l'intervalle lorsque toutes les cases bloquées ont été trouvées.

Fonction step() :

Cette fonction effectue une étape du jeu :

Elle détermine la prochaine case à explorer. Calcule la pénalité et la distance jusqu'à la prochaine case. Met à jour les états en conséquence.

Fonction resetGame() : Cette fonction réinitialise le jeu en réinitialisant tous les états. Rendu JSX :

Affiche l'interface utilisateur avec des éléments HTML et des éléments de formulaire pour ajuster les paramètres du jeu. Utilise le composant Grid pour afficher la grille de jeu. Les boutons "Play" et "Reset" déclenchent les fonctions correspondantes lorsque l'utilisateur clique dessus.

yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
