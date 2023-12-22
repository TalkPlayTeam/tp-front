import React, { useRef, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { t } from 'i18next';
import '../styles/posting.css'; 
import ImageIcon from '../assets/icons/imageIcon';
import AvatarTauren from '../assets/Tauren WoW.png';

const PostPage = () => {
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [showGifs, setShowGifs] = useState(false); // Etat pour afficher la grille de GIFs
    const [selectedGif, setSelectedGif] = useState<GiphyGif | null>(null);
    const giphyFetch = new GiphyFetch("jiQbIiuqdcgO1fpXi2YP6EGDkyyNcgO3");
    const [username, setUsername] = useState("PseudoJoueur");
    const [selectedGame, setSelectedGame] = useState("none");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    type GiphyGif = {
        images: {
          downsized_medium: {
            url: string;
          };
        };
      };
      
    const handlePost = () => {
        console.log("Post: ", postText);    
    };

    const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 10 });

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleCustomFileInputClick = () => {
        fileInputRef.current?.click(); // Utiliser la référence déjà déclarée au niveau supérieur
    };

    const handleGifSelect = (gif: GiphyGif, e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        setSelectedGif(gif); // Met à jour l'état avec le GIF sélectionné
        setShowGifs(false); // Ferme la grille de GIFs
      };
      
      
    return (
        <div>
            <title>Talkplay</title>
            <header className="title_inscription">
            <h1>{t('Faire un post')}</h1>
      </header>
            {!showGifs && ( // Afficher le formulaire de texte et les options par défaut
                <> 
                    <div className='post-container'>
                    <div className='post-header'>
                        <div className='user-info'>
                            <img src={AvatarTauren} alt="Avatar Tauren" className="avatar"/>
                            <span className="username">{username}</span>
                        </div>
                        <div className='game-selection'>
                            <select
                            value={selectedGame}
                            onChange={(e) => setSelectedGame(e.target.value)}
                            className="game-select"
                            >
                            <option value="CS2">CS2</option>
                            <option value="League of Legends">League of Legends</option>
                            </select>
                        </div>
                    </div>
                        <div className='post-body'>
                            <textarea value={postText} onChange={(e) => setPostText(e.target.value)} className="textareaStyle"/>
                            {selectedGif && (
                                <img src={selectedGif.images.downsized_medium.url} alt="Selected GIF" />
                            )}
                        </div>
                        <div className='post-footer'>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hiddenFileInput"
                                accept="image/*"
                            />
                            <div className="customFileUpload" onClick={handleCustomFileInputClick}>
                                <ImageIcon /> 
                                Upload Image
                            </div>
                            {image && <img src={image} alt="Preview" className="imagePreview"/>}
                            <button onClick={() => setShowGifs(true)}>GIF</button>
                            <button onClick={handlePost}>Poster</button>
                        </div>
                    </div>
                </>
            )}
            {showGifs && (
                <Grid
                    fetchGifs={fetchGifs}
                    width={430}
                    columns={3}
                    gutter={6}
                    noLink={true}
                    onGifClick={handleGifSelect} // Utilisez handleGifSelect ici
                />
            )}
            {showGifs && ( // Afficher la grille de GIFs
                <Grid
                    fetchGifs={fetchGifs}
                    width={430}
                    columns={3}
                    gutter={6}
                    noLink={true}
                    onGifClick={(gif, e) => {
                        e.preventDefault();
                        console.log("Selected GIF", gif);
                        setShowGifs(false); // Optionnel : Fermer la grille après sélection d'un GIF
                    }}
                />
            )}
        </div>
    );
};

export default PostPage;
