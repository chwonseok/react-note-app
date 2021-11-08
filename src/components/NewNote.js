import { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    addNote(text);
  };

  return (
    <div className="note new">
      <textarea
        onChange={onChange}
        value={text}
        cols="10"
        rows="10"
        placeholder="Type for new note..."
      ></textarea>
      <div className="note-footer">
        <span>150 Remaining</span>
        <button onClick={onClick} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
