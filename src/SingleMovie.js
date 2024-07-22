import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from './context';

const SingleMovie = () => {
    const { id } = useParams();
    const { movie, isLoading } = useGlobalContext();  // Access the `movie` array and `isLoading` from context
    const navigate = useNavigate();  // Initialize useNavigate hook

    // Display loading state if data is still being fetched
    if (isLoading) {
        return (
            <div className='movie-section'>
                <div className='loading'>Loading...</div>
            </div>
        );
    }

    // Find the movie by ID
    const curMovie = movie.find((m) => m.imdbID === id); 

    // Display message if movie is not found
    if (!curMovie) {
        return (
            <div className="movie-section">
                <button onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                <div className="movie-not-found" style={{ color: 'red', backgroundColor: 'white' }}>Movie not found</div>
            </div>
        );
    }

    const { Title, Poster, Plot, Year, Director } = curMovie;

    return (
        <section className='movie-page-2'>
            <div className='single-movie'>
                <div className='header'>
                    <button onClick={() => navigate(-1)} className='but'>Back</button> {/* Back button */}
                    <h1>{Title}</h1>
                </div>
                <img src={Poster} alt={Title} />
                <p><strong>Plot:</strong> {Plot}</p>
                <p><strong>Year:</strong> {Year}</p>
                <p><strong>Director:</strong> {Director}</p>
            </div>
        </section>
    );
};

export default SingleMovie;
