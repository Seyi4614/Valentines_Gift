import React from 'react';
import '../styles/components.css'; // Use the correct relative path

const Preview = ({ message, playlistId }) => {
  return (
    <div className="preview-section">
      <h2 className="preview-title">Preview</h2>
      <p className="preview-message">{message}</p>
      {playlistId && (
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default Preview;