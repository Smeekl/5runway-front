import React from 'react';

export type TSearchProvider = {
  children: React.ReactElement;
};

export type TSearchValue = {
  history: string[];
  clearHistory: () => void;
  setInHistory: () => void;
  setInputValue: (value: string) => void;
  inputValue: string;
  handleSetHistory: () => void;
};

export type TUser = {
  data: {
    email: string;
    subscriptionPlan: string;
    expiringDate: number;
  };
};
