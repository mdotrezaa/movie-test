import React, { useState, useEffect } from "react";

const SearchBox = (props) => {
    return (
        <div className="search">
          <input
            className='form-control'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Find your Movie...'
          />
        </div>
    )
  }
  export default SearchBox;