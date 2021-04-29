import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalCStyle from './styles/global';

function App() {
return (
    <BrowserRouter>
      <Routes />
      <GlobalCStyle />
    </BrowserRouter>
  );
}

export default App;
