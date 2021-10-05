import logo from './logo.svg';
import './App.css';
import Movie from './route/Movie';
import CardComponent from './components/CardComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const API_KEY = '10cb2671';

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

function App() {
  const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

      try {
        const response = await axios.get(url)
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      } catch(err) {
            console.log('err')
      }

	};
  

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    <div className="App">
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

export default App;
