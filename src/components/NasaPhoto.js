import React from "react";

const NasaPhoto = props => {
    return (
        <div className="nasa-photo">
            <h1>{props.Title}</h1>
            <img className="img" src={props.picture} alt="Nasa's Universe of the Day" /> 
            <h2>Date: {props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};

export default NasaPhoto; 