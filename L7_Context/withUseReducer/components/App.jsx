import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Content';
import { UsersDispatch, UsersContext } from '../state/Contexts';
import { userReducer } from '../state/usersReducer';
import { loginReducer } from '../state/loginReducer';

export const App = () => {
  
  const [usersState, dispatch] = useReducer(userReducer, { users: [] });
  const [user, dispatchLogin] = useReducer(loginReducer);
  const setUser = useCallback((user) => dispatchLogin({ type: 'set', payload: user }),[])
  const seters = useMemo(()=> ({ dispatch, setUser }),[])

  return (
    <BrowserRouter>
      <UsersDispatch.Provider value={seters}>
        <UsersContext.Provider value={usersState.users}>
          <Content user={user} />
        </UsersContext.Provider>
      </UsersDispatch.Provider>
    </BrowserRouter>
  );
};
