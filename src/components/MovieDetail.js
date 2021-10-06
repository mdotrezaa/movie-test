import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./component.css"

const API_KEY = '10cb2671';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.movies === 'N/A' ? require("../assets/images/placeholder.png").default : props.movies}/>
        </Modal.Body>
      </Modal>
    );
  }

function MovieDetail(){
    const [movies, setMovies] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const history = useHistory();

    let { id } = useParams();

    const getMovieDetail = () => {
		const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

        axios.get(url)
        .then((data) => {
            setMovies(data.data);
            console.log(data.data);
        })
    }
  

	useEffect(() => {
		getMovieDetail(id);
	},[id]);
    return(
        <>
            <header>
                <h1>IMovie</h1>
            </header>
            <div className="movie-detail">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img  onClick={() => setModalShow(true)} src={movies.Poster === 'N/A' ? require("../assets/images/placeholder.png").default : movies.Poster}/>
                        </Col>
                        <Col md={8}>
                            <div className="info">
                                <div className="info-top">
                                    <h1>{movies.Title}</h1>
                                    <span>{movies.Released}</span>
                                    <span>Director: {movies.Director}</span>
                                    <span>Actors: {movies.Actors}</span>
                                    <span>Awards: {movies.Awards}</span>
                                    <span>Language: {movies.Language}</span>
                                    <span>Country: {movies.Country}</span>
                                </div>
                                <div className="info-body">
                                    <p>{movies.Plot}</p>
                                </div>
                                <div className="info-bottom">
                                    <div className="box">
                                        {movies.Runtime}
                                    </div>
                                    <div className="box">
                                        {movies.Rated}
                                    </div>
                                </div>
                                <button className="btn-back" onClick={() => history.goBack()}>Go Back</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    title={movies.Title}
                    movies={movies.Poster}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    );
}

export default MovieDetail;