import { useState } from 'react';
import NotesList from './components/NotesList';
import uniqid from 'uniqid';

const defaultNote = [
  {
    id: uniqid(),
    text: 'Default note\n\n\nthis is to show you how the note looks like when you add\nyou can delete this default note to start to use this App 😉\nHave fun!',
    date: 'by chwonseok',
  },
];

const App = () => {
  const [notes, setNotes] = useState(defaultNote);

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
