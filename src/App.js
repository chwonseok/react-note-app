import { useState } from 'react';
import NotesList from './components/NotesList';
import uniqid from 'uniqid';

const data = [
  {
    id: uniqid(),
    text: 'this is the first note!',
    date: '2021/11/01',
  },
  {
    id: uniqid(),
    text: 'this is the second note!',
    date: '2021/11/02',
  },
  {
    id: uniqid(),
    text: 'this is the third note!',
    date: '2021/11/03',
  },
  {
    id: uniqid(),
    text: 'this is the forth note!',
    date: '2021/11/04',
  },
];

const App = () => {
  const [notes, setNotes] = useState(data);

  return (
    <div className="app">
      <div className="container">
        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default App;
