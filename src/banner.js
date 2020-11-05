import React, { useEffect, useState } from 'react';
import requests from './requests';
import axios from "./axios";
import './banner.css';

const Banner = ({}) => {

    const [movie, setMovie] = useState([])

    async function fetchBanner() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        // console.log(request.data.results[
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length -1)
        ])
        return request;
    }

    useEffect(() => {
        fetchBanner();
    }, []);


    function truncate(str, n){
        return str?.length>n ? str.substr(0,n-1)+ "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="bannerContents">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <h1 className="bannerDesc">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="bannerFadeBottom"></div>
        </header>
    )
}

export default Banner;
