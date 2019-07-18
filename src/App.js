import React from "react";
import "./App.css";
import NasaParentComponent from './Components/NasaParentComponent';
import NasaProjectTimeLine from './Components/NasaProjectTimeLine';

function App() {
  return (
    <div className="App">
      <NasaParentComponent />
       <NasaProjectTimeLine />
       <NasaProjectTimeLine />
      
    </div>
  );
}

export default App;
