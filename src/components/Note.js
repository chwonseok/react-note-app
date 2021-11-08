import { MdDeleteForever } from 'react-icons/md';

const Note = ({ note, removeNote }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-footer">
        <span>{note.date}</span>
        <MdDeleteForever
          onClick={() => removeNote(note.id)}
          className="delete-btn"
        />
      </div>
    </div>
  );
};

export default Note;
