import { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import uniqid from 'uniqid';
import Search from './components/Search';
import Header from './components/Header';

const defaultNote = [
  {
    id: uniqid(),
    text: 'Default note\n\n\nthis is to show you how the note looks like when you add\nyou can delete this default note to start to use this App 😉\nHave fun!',
    date: 'by chwonseok',
  },
];

const App = () => {
  const [notes, setNotes] = useState(defaultNote);
  const [searchText, setSearchText] = useState('');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'));

    if (!savedNotes) return; // To check if there is savedNotes

    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

  const resetNotes = () => {
    localStorage.clear();
    setNotes(defaultNote);
  };

  const changeDark = () => {
    setDark(!dark);
  };

  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

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
    <div className={`${dark ? 'app dark' : 'app'}`}>
      <div className="container">
        <Header changeDark={changeDark} resetNotes={resetNotes} />
        <Search searchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNote={addNote}
          removeNote={removeNote}
        />
      </div>
    </div>
  );
};

export default App;
