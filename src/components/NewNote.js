const AddNote = () => {
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="10"
        placeholder="Type for new note..."
      ></textarea>
      <div className="note-footer">
        <span>150 Remaining</span>
        <button className="save">save</button>
      </div>
    </div>
  );
};

export default AddNote;
