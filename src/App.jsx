
import React from 'react'
import Notes from './components/notes.jsx'
import Sidebar  from './components/sidebar.jsx';
import UpperNav from './components/upperNav.jsx';
import './App.css'


function App() {
  
  const notes = [
    {
      icon: 'UN',
      title: 'My Note #1',
      webpage: 'unstopp.com',
      time: '11:05 AM',
      tags: ['Water', 'Aquatic Life', 'Marine Fish'],
      highlight: 'Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.',
      notes: 'My first note for research on a topic associated with water for my project'
    },
    {
      icon: 'TO',
      title: 'My Note #2',
      webpage: 'timesofindia.com',
      time: '11:12 AM',
      tags: ['Water', 'Aquatic Life', 'Marine Fish'],
      highlight: 'Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.',
      notes: 'My second note for research on a topic associated with water for my project'
    },
    {
      icon: 'GG',
      title: 'My Note #3',
      webpage: 'geeksforgeeks.com',
      time: '11:22 AM',
      tags: ['Water', 'Aquatic Life', 'Marine Fish'],
      highlight: 'Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.',
      notes: 'My third note for research on a topic associated with water for my project'
    },
    {
      icon: 'UN',
      title: 'My Note #4',
      webpage: 'unstopp.com',
      time: '11:35 AM',
      tags: ['Water', 'Aquatic Life', 'Marine Fish'],
      highlight: 'Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.',
      notes: 'My fourth note for research on a topic associated with water for my project'
    }
    

  ];

  return (

      <div className="app">
        <Sidebar/>

      <div>
        <UpperNav/>
      <div className="notes-container">
      <h4>Notes created on 16th May 2024</h4>
        {notes.map((note, index) => (
          <Notes note={note} key={index} />
        ))}
      </div>
      </div>
    </div>

  )
}

export default App



