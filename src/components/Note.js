import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className="note">
      <p>this is the first note</p>
      <div className="note-footer">
        <span>2021/11/08</span>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Note;
