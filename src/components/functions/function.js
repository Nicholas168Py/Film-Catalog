import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllMovies() {
    const API_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '5de32fff577b879657a0fa455f5ace3f'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    //state variables
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: 'Loading Movies' });
    const [playing, setPlaying] = useState(false);

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

    useEffect(()=>{
        fetchMovies();
    },[])

    return (
        <div>
            <div className='container mt-3'>
            <div className='row'>
                {movies.map((movie) =>(
                    <div key={movie.id} className='col-md-4 mb-3'>
                        <img src={`${URL_IMAGE + movie.poster_path}`} alt=''  height={600} width= '100%'/>
                        <h4 className='text-center'>{movie.title}</h4>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )

}


export { AllMovies }
