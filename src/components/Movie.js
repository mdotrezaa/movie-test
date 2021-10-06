import '../App.css';
import CardComponent from './CardComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchBox from './SearchBox';

const API_KEY = '10cb2671';

function Movie() {
    const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

      try {
        const response = await axios.get(url)
        if (response.data.Search) {
          setMovies(response.data.Search);
          console.log(response.data.Search);
        }
      } catch(err) {
            console.log('err')
      }

	};
  

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    <div>
      <header>
            <h1>IMovie</h1>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      <div className="list">
        <CardComponent movies={movies}/>
      </div>
    </div>
  );
}

export default Movie;
