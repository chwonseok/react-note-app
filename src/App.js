import NotesList from './components/NotesList';

const data = [
  {
    id: id(),
    text: 'this is the first note!',
    data: '2021/11/01',
  },
  {
    id: id(),
    text: 'this is the second note!',
    data: '2021/11/02',
  },
  {
    id: id(),
    text: 'this is the third note!',
    data: '2021/11/03',
  },
  {
    id: id(),
    text: 'this is the forth note!',
    data: '2021/11/04',
  },
];

const App = () => {
  const [notes, setNotes] = useState(data);
  return (
    <div className="app">
      <div className="container">
        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default App;
