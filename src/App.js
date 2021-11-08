import { useState } from 'react';
import NotesList from './components/NotesList';
import uniqid from 'uniqid';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const date = new Date().toLocaleDateString();

    const newNote = {
      id: uniqid(),
      text: note,
      date: date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <div className="container">
        <NotesList notes={notes} addNote={addNote} />
      </div>
    </div>
  );
};

export default App;
