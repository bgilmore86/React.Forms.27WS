import React from 'react';
import {useState} from 'react';
import SignUpForm from './components/signupform';
import Authenticate from './components/authenticate';
import './App.css'

export default function App () {
  const [token, setToken]=useState(null);

  return (
    <>
    <Authenticate token={token} setToken={setToken} />
    <SignUpForm token={token} setToken={setToken} />
    </>
  );
}
