import { useState } from 'react'; // Importation de la fonction useState depuis React pour gérer l'état local

import Grid from './components/Grid'; // Importation du composant Grid depuis un fichier local
import { calculateCoordinates, distance } from './utils'; // Importation des fonctions calculateCoordinates et distance depuis un fichier local

function App() {
  // Déclaration des états locaux à l'aide de useState
  const [gridSize, setGridSize] = useState<string>('2');
  const [blockedRatio, setBlockedRatio] = useState<string>('0.25');
  const [occupiedRatio, setOccupiedRatio] = useState<string>('0.25');
  const [coordinates, setCoordinates] = useState<{ index: number; occupied: boolean; blocked: boolean }[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pathSize, setPathSize] = useState<number>(0);
  const [nFound, setNFound] = useState<number>(0);

  // Fonction pour générer les coordonnées du jeu
  const generateCoordinates = () => {
    const totalSquares = parseInt(gridSize) ** 2;
    const blockedSquares = Math.floor(totalSquares * parseFloat(blockedRatio));

    // Utilisation de la fonction calculateCoordinates pour générer les coordonnées
    const newCoordinates = calculateCoordinates(parseInt(gridSize), blockedSquares, parseFloat(occupiedRatio));

    // Mise à jour des états avec les nouvelles coordonnées
    setCoordinates(newCoordinates);
    setCurrentIndex(0);
    setPathSize(0);
    setNFound(0);
  };

  // Fonction exécutée lorsqu'on appuie sur le bouton "Play"
  const onPlay = () => {
    const interval = setInterval(() => {
      step(); // Exécute une étape du jeu
      // Arrête l'intervalle si toutes les cases bloquées ont été trouvées
      if (nFound === coordinates.filter(square => square.blocked).length) {
        clearInterval(interval);
      }
    }, 500); // Interval de 500 millisecondes entre chaque étape
  };

  // Fonction pour effectuer une étape du jeu
  const step = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= coordinates.length) return;
    const nextSquare = coordinates[nextIndex];

    // Calcul de la pénalité en fonction de la case suivante
    const penalty = nextSquare.blocked ? 2 : nextSquare.occupied ? 0 : 1;

    // Calcul de la distance jusqu'à la prochaine case
    const distanceToNext = distance(currentIndex + 1, nextIndex + 1, parseInt(gridSize));

    // Mise à jour de l'état avec la taille du chemin parcouru
    setPathSize(pathSize + 1 + distanceToNext + penalty);

    // Mise à jour de l'index actuel
    setCurrentIndex(nextIndex);

    // Si la case suivante est occupée, on la marque comme trouvée et on la désactive
    if (nextSquare.occupied) {
      setNFound(nFound + 1);
      nextSquare.occupied = false;
    }
  };

  // Fonction pour réinitialiser le jeu
  const resetGame = () => {
    // Réinitialisation de tous les états
    setCoordinates([]);
    setCurrentIndex(0);
    setPathSize(0);
    setNFound(0);
  };

  // Rendu JSX de l'interface utilisateur
  return (
    <div>
      <h1>Marco Polo Game</h1>
      <div>
        <label>Grid size (2-20):</label>
        <input
          type="number"
          value={gridSize}
          min={2}
          max={20}
          onChange={e => setGridSize(e.target.value)}
        />
      </div>
      <div>
        <label>Blocked ratio (0-0.5):</label>
        <input
          type="number"
          step="0.01"
          value={blockedRatio}
          min={0}
          max={0.5}
          onChange={e => setBlockedRatio(e.target.value)}
        />
      </div>
      <div>
        <label>Occupied ratio (0.1-1):</label>
        <input
          type="number"
          step="0.01"
          value={occupiedRatio}
          min={0.1}
          max={1}
          onChange={e => setOccupiedRatio(e.target.value)}
        />
      </div>
      <button onClick={generateCoordinates}>Generate</button>
      <Grid size={parseInt(gridSize)} coordinates={coordinates} /> {/* Rendu du composant Grid */}
      <div>
        <button onClick={onPlay}>Play</button>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}

export default App;
