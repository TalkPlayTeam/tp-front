import React from 'react';
import Post from '../components/post'; 
import AvatarTauren from '../assets/Tauren WoW.png';
import WoWGamePic from '../assets/worldwarcraft_362191b.jpg';
import '../styles/post.css'; 

const postData = {
  text: "Aujourd'hui, j'ai battu mon record !",
  images: [
    WoWGamePic
  ],
  game: 'World of Warcraft',
  username: 'Clashix',
  profilePic: AvatarTauren,
  date: '18h45 - 07/01/2024'
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
        date={postData.date}
      />
    </div>
  );
}

export default App;
