import React from 'react';

 function NasaChildComponents(props) {
    if(!props)
  {
      return <h1>loading</h1>
  } 
  console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
            <img alt = "nasaImg" width= "70%" src={props.url} type={props.media_type}/>
        </div>

    )

}  
export default NasaChildComponents;

