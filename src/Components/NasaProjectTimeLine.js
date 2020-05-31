import React from 'react';
import '../App.css';

function NasaProjectTimeLine (props){
  return ( 
      <div id = "uicard">
          <div className = "content">
          <div id="header">Project Timeline</div>
            <hr id="HR"/>
              <div className = "extra content"> 
              <h4 className="ui sub header">Activity</h4>
              </div>
              <div className="ui small feed">
              <div className="summary">
            <p>Elliot Fu added Jenny Hess to the project</p>
            <p>Stevie Feliciano was added as an Administrator</p>
            <button id="uibutton">Join Project</button>
          </div>
              </div>
         </div>
      </div>
  );
}  
export default NasaProjectTimeLine;