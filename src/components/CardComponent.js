import React, { useState, useEffect } from "react";
import "./component.css"

const CardComponent = (props) => {
    return(
        <>
			{props.movies.map((movie, index) => (
                <div className="card">
                        <img src={movie.Poster}/>
                </div>
            ))}
        </>
    );
}

export default CardComponent;