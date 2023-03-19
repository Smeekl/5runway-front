import React, { useState, useEffect } from 'react';
import { useService } from '@services/services';
import { TSearchProvider, TSearchValue } from '@composed-components/types';

const { createContext, useContext } = React;
const SearchContext = createContext({} as TSearchValue);

export const SearchProvider = ({ children }: TSearchProvider) => {
  const { searchService } = useService();

  const [history, setHistory] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setHistory(searchService.getSearchedItems() || []);
  }, []);

  function setInHistory() {
    if (!inputValue.trim()) return;

    searchService.searchItem(inputValue);
    setHistory((prevHistory) => [inputValue, ...prevHistory.slice(0, 9)]);
    setInputValue('');
  }

  function clearHistory() {
    searchService.clearSearchedItems();
    setHistory([]);
  }

  function handleSetHistory() {
    if (history.length <= 10) {
      return;
    }

    setHistory([...history.slice(0, 10)]);
  }

  return (
    <SearchContext.Provider
      value={{
        setInHistory,
        clearHistory,
        history,
        inputValue,
        setInputValue,
        handleSetHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
