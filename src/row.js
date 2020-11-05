import React, { useEffect, useState } from "react";
import axios from "./axios";
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseImageUrl = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl }) {
const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    // used to initialize state
    // movies=array because useState contain []
    // setMovies=function to set the movies

    const [trailerUrl, setTrailerUrl] = useState("");

    async function fetchdata() {
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results, "results");
        setMovies(request.data.results);
    }
    useEffect(() => {
        // async
        fetchdata();
    }, [fetchUrl]);
    // []-RUN ONCE when this component loads
    // [fetchUrl] RUN EVERYTIME when fetchUrl changes
    // any variable that is being used inside useEffect and it is declared/coming from outside useEffect THEN it should be passed in empty array of useEffect

    // console.log(movies, "movies")
    // console.log(setMovies, "setmovies")

    const opts = {
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    }; 

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {/*row_poster */}
                {movies.map(movie => (
                    <img 
                        key = {movie.id}
                        onClick={() => handleClick(movie)}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                        // src={`${baseImageUrl}${movie.poster_path}`} 
                        src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;