const Header = ({ changeDark, resetNotes }) => {
  return (
    <div className="header">
      <h1>Notes.</h1>
      <div className="header-btns">
        <button onClick={() => changeDark()} className="btn">
          Dark Mode
        </button>
        <button
          onClick={() => {
            resetNotes();
          }}
          className="btn reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
