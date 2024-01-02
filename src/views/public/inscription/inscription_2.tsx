import React, { useState } from 'react';
import lolLogo from '../../assets/LoL_Logo.jpg';
import cs2Image from '../../assets/CS2.jpg';
import '../../styles/inscription.css'; 
import { useTranslation } from 'react-i18next';

type Game = {
        name: string;
        image: string;
};

const GameImage = ({ game, onSelect, isSelected }: { game: Game, onSelect: (game: Game) => void, isSelected: boolean }) => {
        const className = isSelected ? "game-image selected" : "game-image";
    
        return (
            <img 
                src={game.image} 
                alt={game.name} 
                onClick={() => onSelect(game)}
                className={className}
                style={{ width: '100px', height: '100px' }}
            />
        );
    };

const GamesPage = () => {
        const [selectedGames, setSelectedGames] = useState<Game[]>([]); // Declare selectedGames variable
    
        const handleSelectGame = (game: Game) => {
            if (selectedGames.some(g => g.name === game.name)) {
                setSelectedGames(selectedGames.filter(g => g.name !== game.name));
            } else {
                setSelectedGames([...selectedGames, game]);
            }
        };
        
    
        const games = [
            { name: 'League of Legends', image: lolLogo },
            { name: 'CS2', image: cs2Image }
        ];
    
        return (
            <div>
                <title>Inscription - Talkplay</title>
                <header className="title_inscription">
                    <h1>Inscription</h1>
                    <h3>Connectez vos comptes de jeux</h3>
                </header>
                <div className="games-list">
                    {games.map(game => (
                        <GameImage 
                            key={game.name} 
                            game={game} 
                            onSelect={handleSelectGame}
                            isSelected={selectedGames.includes(game)}
                        />
                    ))}
                </div>
                <div className="selected-games">
                    {
                        selectedGames.length === 0 || selectedGames.length === 1
                        ? `${selectedGames.length} image sélectionnée`
                        : `${selectedGames.length} images sélectionnées`
                    }
                </div>
            </div>
        );
};

export default GamesPage;
