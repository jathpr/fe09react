import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './Content';
import { UsersDispatch, UsersContext } from '../state/Contexts';
import { userReducer } from '../state/usersReducer';
import { loginReducer } from '../state/loginReducer';

export const App = () => {

  export function userReducer(state, action) {
    switch (action.type) {
      case 'set':
        return { users: action.payload };
      case 'add':
        return { users: [...state.users, action.payload] };
      case 'delete':
        return { users: state.users.filter((user) => user.id !== action.payload) };
      case 'update':
        return { users: state.users.map((user) => (user.id !== action.payload.id ? user : action.payload)) };
      default:
        throw new Error();
    }
  }
  
  const [usersState, dispatch] = useReducer(userReducer, { users: [] });
  // const [state, setstate] = useState(initialState)

  // setstate(prevVal => prevVal + 1)


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
