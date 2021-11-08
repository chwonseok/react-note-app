import NewNote from './NewNote';
import Note from './Note';

const NotesList = ({ notes, addNote }) => {
  return (
    <div className="notes-list">
      <NewNote addNote={addNote} />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
