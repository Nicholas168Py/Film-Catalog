import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    const API_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '5de32fff577b879657a0fa455f5ace3f'

    //state variables
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [movie, setMovie] = useState({ title: 'Loading Movies' });

    //API get request
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover"
        const { data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results)
        setMovie(results[0])

    }

    // movie search function
    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey)
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <form className="d-flex container mb-4" role="search" onClick={searchMovies}>
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> setSearchKey(e.target.value)}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )

}

export default Search


