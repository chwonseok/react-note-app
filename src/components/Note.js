import { MdDeleteForever } from 'react-icons/md';

const Note = ({ note }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="note-footer">
        <span>{note.date}</span>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Note;
