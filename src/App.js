import React, { useState } from 'react';
import { firestore } from './firebase'; // Import Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions
import MessageEditor from './components/MessageEditor';
import SpotifyInput from './components/SpotifyInput';
import Preview from './components/Preview';
import './styles/App.css';
import './styles/components.css';

function App() {
  const [message, setMessage] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateLink = async () => {
    try {
      const giftRef = await addDoc(collection(firestore, 'gifts'), {
        message,
        playlistId,
        createdAt: serverTimestamp(),
      });
  
      const link = `${window.location.origin}/gift/${giftRef.id}`;
      setGeneratedLink(link);
      alert(`Your gift link: ${link}`);
      console.log('Link generated:', link); // Log the link
    } catch (error) {
      console.error('Error saving gift:', error); // Log the full error
      alert('Failed to generate link. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">Valentine's Gift</h1>
        <MessageEditor message={message} setMessage={setMessage} />
        <SpotifyInput setPlaylistId={setPlaylistId} />
        <Preview message={message} playlistId={playlistId} />
        <button onClick={handleGenerateLink} className="attach-button">
          Generate Link
        </button>
        {generatedLink && (
          <div className="generated-link">
            <p>Share this link: <a href={generatedLink}>{generatedLink}</a></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;