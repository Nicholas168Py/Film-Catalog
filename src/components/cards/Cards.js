import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllMovies() {
    const API_URL = "https://api.themoviedb.org/3/"
    const API_KEY = "5de32fff577b879657a0fa455f5ace3f"
    const URL_IMAGE = "https://image.tmdb.org/t/p/original"

    //state variables
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ title: 'Loading Movies' });

    //API get request
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover";
        const { data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results);
        setMovie(results[0]);

    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div>
{/* Container of current movies */}
            <Container fluid className='mt-3'>
                <Row className='cards-content'>
                    {movies.map((movie) => (
                        <Col key={movie.id} className="justify-content-md-center mt-5">
                            <Card key={movie.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`${URL_IMAGE + movie.poster_path}`} />
                                {/* <Card.Body> */}
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                {/* </Card.Body> */}
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>FILM DATE</ListGroup.Item>
                                    <ListGroup.Item>{movie.release_date}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}

export { AllMovies }

