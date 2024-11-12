
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import React from 'react';
import Routers from './components/route';
import { FirebaseProvider } from './components/firebase';

function App() {
  return (
    <div className="App">
      <FirebaseProvider>
        <BrowserRouter>
          <Routers></Routers>
        </BrowserRouter>
      </FirebaseProvider>

    </div>
  );
}

export default App;