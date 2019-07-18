import React, { useState, useEffect } from 'react';
import  NasaChild  from './NasaChildComponents';
import axios from 'axios';

 function NasaParentComponent () {
    const [info, setInfo] = useState({})

   
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=CZRXl8NBiXnCC2p1Wega2rxSbeAtYJQkEXfH3nk4')
            .then(res => {
                const getAnswer = res.data;
                setInfo(getAnswer)
                console.log(getAnswer);
            })
            .catch(error =>
                 { 
                  console.log(error)
                 })
    }, []);
    console.log(info)

    return ( 
        <div>
            <NasaChild
            date={info.date} 
            explanation={info.explanation} 
            url={info.url} 
            title={info.title}
             media_type={info.media_type} />
        </div>
    )
}

export default NasaParentComponent;