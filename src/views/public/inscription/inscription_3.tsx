import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// Type pour les jeux sélectionnés
type Game = {
  name: string;
  image: string;
};

const Inscription3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [steamConnected, setSteamConnected] = useState(false);

  // Simule la récupération des jeux sélectionnés
  useEffect(() => {
    // Ici, récupérez et définissez les jeux sélectionnés depuis le contexte, Redux ou le localStorage
    const gamesFromPreviousPage: Game[] = location.state?.selectedGames || [];
    setSelectedGames(gamesFromPreviousPage);
  }, [location]);

  const connectToSteam = async () => {
    try {
      // Ici, remplacez par l'appel API à Steam pour la connexion
      const response = await axios.get('/some/steam/api/endpoint');
      console.log(response.data);
      // Mettez à jour l'état selon la réponse de l'API Steam
      setSteamConnected(true);
    } catch (error) {
      console.error('Erreur lors de la connexion à Steam:', error);
      // Gérer l'erreur
    }
  };

  return (
    <div>
      <h1>Inscription - Étape 3</h1>
      <h2>Jeux sélectionnés</h2>
      <ul>
        {selectedGames.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
      <button onClick={connectToSteam}>Se connecter via Steam</button>
    </div>
  );
};

export default Inscription3;
