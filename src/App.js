import React, { useState } from 'react';
import MessageEditor from './components/MessageEditor';
import SpotifyInput from './components/SpotifyInput';
import Preview from './components/Preview';
import './styles/App.css';
import './styles/components.css';

function App() {
  const [message, setMessage] = useState('');
  const [playlistId, setPlaylistId] = useState('');

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">Valentine's Gift</h1>
        <MessageEditor message={message} setMessage={setMessage} />
        <SpotifyInput setPlaylistId={setPlaylistId} />
        <Preview message={message} playlistId={playlistId} />
      </div>
    </div>
  );
}

export default App;

