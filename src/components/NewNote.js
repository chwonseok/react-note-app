import { useState } from 'react';

const TEXT_LIMIT = 200;

const AddNote = ({ addNote }) => {
  const [text, setText] = useState('');
  const [textLimit, setTextLimit] = useState(TEXT_LIMIT);

  const onChange = (e) => {
    const textValue = e.target.value;
    if (textLimit === 0) return; // it blocks user to type more when textLimit reaches 0

    setText(textValue);
    setTextLimit(TEXT_LIMIT - textValue.length);
  };

  const onClick = () => {
    if (text.trim().length === 0) return; // prevent from submitting with empty text
    addNote(text);

    // Reset textarea and remaining number
    setText('');
    setTextLimit(TEXT_LIMIT);
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
        <span>{textLimit} Remaining</span>
        <button onClick={onClick} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
