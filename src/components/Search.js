import { MdSearch } from 'react-icons/md';

const Search = ({ searchNote }) => {
  const onChange = (e) => {
    const textValue = e.target.value;
    searchNote(textValue);
  };

  return (
    <div className="search">
      <MdSearch className="search-icon" />
      <input onChange={onChange} type="text" placeholder="type to search..." />
    </div>
  );
};

export default Search;
