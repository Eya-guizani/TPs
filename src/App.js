
import './App.css';

import React from 'react';
import Carte from './components/carte';

function App() {
  return (
    <div > 
      <Carte 
      lastName="Robinson"
      firstName="Joel"
      age={53}
      hair="dark brown"
      />
      

      <Carte
      lastName="Robot"
      firstName="Crow T."
      age={31}
      hair="none"
      />
      </div>  
      
  );
}

export default App;

