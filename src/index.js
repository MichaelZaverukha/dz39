import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Main from './components/main';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
      <Header/> 
      <Main/>
      </>
);

