import React from 'react';

export const UsersDispatch = React.createContext();
export const UsersContext = React.createContext();


function useCountState() {
  const context = React.useContext(UsersContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}