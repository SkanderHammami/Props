import React from 'react';
 
import Profile from './profile/Profile';
function App() {
  return (
    <div className="App">
      <Profile name="Skander Hammami" bio="Lorem" profession="Lorem">
         <img src="img.jpg" alt="myimage"/>
      </Profile>

    </div>
  );
};

export default App;
