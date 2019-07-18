import React, { useState, useEffect } from 'react';
import { NasaChild } from './NasaChildComponents';
import axios from 'axios';

function NasaParentComponent () {
    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=A4VLWyldR2X1z5WyknQp2Zq54D4nJ1Dc5NOb6maH')
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

    return (
        <div>
            <NasaChild
            date={info.date} 
            explanation={info.explanation} 
            url={info.url} 
            title={info.title}
             media_type={info.media_type} />
            {}
        </div>
    )
}

export default NasaParentComponent;