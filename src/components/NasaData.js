import React, {useState, useEffect} from "react";
import NasaPhoto from "./NasaPhoto";
import axios from "axios";

export default function NasaData() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9cnUud9XB7N1J7hZzGBaL2ft0rP1AA0DSg1CevXP')
            .then(response => {
                console.log(response.data);
                setPhoto(response.data);
            })
            .catch(error => {
                console.log("the data was not returned", error);
            });
    }, [])
    return (
        <div className = "frame">
            <NasaPhoto 
            Title = {photo.title}
            date = {photo.date}
            explanation = {photo.explanation}
            picture = {photo.url}
            />
        </div>
    )
} 