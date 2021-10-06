import React, { useState, useEffect } from "react";
import "./component.css"

const CardComponent = (props) => {
    return(
        <>
			{props.movies.map((movie, index) => (
                <div className="card">
                        <img src={movie.poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : movie.poster}/>
                </div>
            ))}
        </>
    );
}

export default CardComponent;