import React from 'react';
import Homepage from './components/Homepage';
import Destiny from './components/Destiny'; // Import the new Destiny component

const App = () => {
  return (
    <div>
      <Homepage />
      <Destiny /> {/* Add the Destiny component here */}
    </div>
  );
};

export default App;