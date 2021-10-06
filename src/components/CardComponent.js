import React, { useState, useEffect } from "react";
import "./component.css"

const CardComponent = (props) => {
    const handleClick = () =>{
        
    }
    return(
        <>
			{props.movies.map((movie, index) => (
                <a className="card" href={"/movie/" + movie.imdbID}>
                    <img src={movie.Poster === 'N/A' ? require("../assets/images/placeholder.png").default : movie.Poster}/>
                </a>
            ))}
        </>
    );
}

export default CardComponent;