import React from 'react';

// Post component
const Post = ({ text, images, game, username, profilePic, ...props }: { text: string, images: string[], game: string, username: string, profilePic: string, [key: string]: any }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={profilePic} alt={`${username}'s profile`} className="profile-pic"/>
        <h5>{username}</h5>
        <h5>{game}</h5>
      </div>
      <div className="post-content">
        <p>{text}</p>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Post content" />
        ))}
      </div>
    </div>
  );
};

export default Post;
