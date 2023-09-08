import React, { useState, useEffect } from 'react';
import "./Banner.css";
import { fetchData } from "../../api/api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banner = () => {
    const [movie, setMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const [noTrailerMessage, setNoTrailerMessage] = useState("");

    useEffect(() => {
        // Function to fetch a random movie
        const fetchRandomMovie = async () => {
            // Define an array of endpoints to choose from
            const endpoints = [
                "originals",
                "trending",
                "now_playing",
                "popular",
                "top_rated",
                "upcoming",
            ];

            // Select a random endpoint from the array
            const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

            // Fetch data for the selected endpoint
            const response = await fetchData(randomEndpoint);

            // Get a random movie from the results
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomMovie = response.data.results[randomIndex];

            setMovie(randomMovie);
        };

        fetchRandomMovie(); // Fetch a random movie when the component mounts
    }, []);

    const playTrailer = () => {
        if (trailerUrl) {
            setTrailerUrl(""); // Close the trailer if it's already open
        } else {
            // Use the movie title to search for the trailer
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                        setNoTrailerMessage(""); // Clear "No trailer found" message
                    } else {
                        setNoTrailerMessage("No trailer found for this movie.");
                    }
                })
                .catch((error) => console.error("Error fetching trailer:", error));
        }
    };

    const closeTrailer = () => {
        setTrailerUrl("");
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={playTrailer}>Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
                {trailerUrl && (
                    <div className="trailer-container">
                        <div className="trailer">
                            <button className="close-button" onClick={closeTrailer}>
                                Close
                            </button>
                            <YouTube videoId={trailerUrl} opts={opts} />
                        </div>
                    </div>
                )}
                {noTrailerMessage && (
                    <div className="no-trailer-message">
                        <p>{noTrailerMessage}</p>
                        <button className="close-button" onClick={() => setNoTrailerMessage("")}>
                            Close
                        </button>
                    </div>
                )}
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    );
}

export default Banner;
