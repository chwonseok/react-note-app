const Header = ({ changeDark }) => {
  return (
    <div className="header">
      <h1>Notes.</h1>
      <button onClick={() => changeDark()} className="btn">
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
