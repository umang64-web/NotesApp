// src/components/Note.js

import React from 'react';
import './Notes.css';

const Notes = ({ note }) => {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-icon">{note.icon}</div>
        <div className="note-title">{note.title}</div>
      </div>
      <div className="note-details">
        <div className="note-webpage"><strong>Webpage: </strong>{note.webpage}</div>
        <div className="note-time">{note.time}</div>
      </div>
      <div className="note-tags">
        {note.tags.map(tag => (
          <span className="note-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="note-highlight">
        <strong>Highlight:</strong> {note.highlight}
      </div>
      <div className="note-notes">
        <strong>Notes:</strong> {note.notes}
      </div>
    </div>
  );
};

export default Notes;
