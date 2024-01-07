import React from 'react';
import Post from '../components/post'; 
import AvatarTauren from '../assets/Tauren WoW.png';
import WoWGamePic from '../assets/worldwarcraft_362191b.jpg';

const postData = {
  text: "Aujourd'hui, j'ai battu mon record !",
  images: [
    WoWGamePic
  ],
  game: 'World of Warcraft',
  username: 'Clashix',
  profilePic: AvatarTauren
};  

function App() {
  return (
    <div className="App">
      {/* Utilisation du composant Post avec des données passées en props */}
      <Post
        text={postData.text}
        images={postData.images}
        game={postData.game}
        username={postData.username}
        profilePic={postData.profilePic}
      />
    </div>
  );
}

export default App;
