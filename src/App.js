import React from "react";
import "./App.css";
import NasaParentComponent from './Components/NasaParentComponent';
import NasaProjectTimeLine from './Components/NasaProjectTimeLine';

function App() {
  return (
    <div className="App">
      <NasaParentComponent />
      <div id ="displayCard">
       <NasaProjectTimeLine />  
       <NasaProjectTimeLine />
       <NasaProjectTimeLine />  
       </div>
    </div>
  );
}

export default App;
