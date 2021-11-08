import NewNote from './NewNote';
import Note from './Note';

const NotesList = ({ notes, addNote, removeNote }) => {
  return (
    <div className="notes-list">
      <NewNote addNote={addNote} />
      {notes.map((note) => (
        <Note key={note.id} note={note} removeNote={removeNote} />
      ))}
    </div>
  );
};

export default NotesList;
