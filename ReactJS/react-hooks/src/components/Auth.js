import React, { useContext } from 'react';

import Card from './UI/Card';
import { AuthContext } from '../context/auth-context';
import './Auth.css';


const Auth = props => {
  const ctx = useContext(AuthContext)

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={ctx.login}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
