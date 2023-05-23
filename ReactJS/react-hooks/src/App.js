import React, { useContext } from 'react';

import { AuthContext } from './context/auth-context';
import Auth from './components/Auth';
import Ingredients from './components/Ingredients/Ingredients';

const App = props => {
  const ctx = useContext(AuthContext);


  return (
    <>
      {ctx.isAuth ? <Ingredients /> : <Auth />}
    </>
  );
};

export default App;
