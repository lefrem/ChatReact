import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Chat from './components/Chat';

  ReactDOM.render(
    <Chat />,
    document.getElementById('root')
  );

serviceWorker.unregister();
