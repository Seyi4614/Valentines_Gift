import React, { useState } from 'react';
import '../styles/components.css'; // Use the correct relative path

const SpotifyInput = ({ setPlaylistId }) => {
  const [playlistLink, setPlaylistLink] = useState('');

  const handleAttachPlaylist = () => {
    const playlistId = playlistLink.split('/').pop();
    setPlaylistId(playlistId);
  };

  return (
    <div className="spotify-input">
      <input
        type="text"
        value={playlistLink}
        onChange={(e) => setPlaylistLink(e.target.value)}
        placeholder="Add a Spotify playlist link..."
      />
      <button onClick={handleAttachPlaylist} className="attach-button">
        Attach Playlist
      </button>
    </div>
  );
};

export default SpotifyInput;