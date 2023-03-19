import { useEffect } from 'react';
import Button from '@components/Button/Button';
import SearchInput from '@components/SearchInput/SearchInput';
import { useSearch } from './service';
import './style.css';

const Search = () => {
  const {
    history,
    clearHistory,
    setInHistory,
    setInputValue,
    inputValue,
    handleSetHistory,
  } = useSearch();

  useEffect(() => {
    handleSetHistory();
  });

  return (
    <div className="search">
      <h1 className="search__header">Search</h1>
      <div className="search__field">
        <SearchInput
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
      </div>
      <div className="search__suphistory suphistory">
        <span className="suphistory__tile">History</span>
        <span className="suphistory__link" onClick={clearHistory}>
          CLEAR
        </span>
      </div>
      <ul className="search__history history">
        {history.length ? (
          history.map((item, idx) => (
            <li className="history__item" key={idx}>
              {item}
            </li>
          ))
        ) : (
          <li>No history</li>
        )}
      </ul>
      <Button className="search__show" onClick={setInHistory}>
        Show results
      </Button>
    </div>
  );
};

export default Search;
