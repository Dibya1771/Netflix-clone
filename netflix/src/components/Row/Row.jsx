import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/api";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, param }) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [list, setList] = useState([]);
    const [noTrailerMessage, setNoTrailerMessage] = useState("");

    useEffect(() => {
        fetchData(param)
            .then((res) => setList(res.data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, [param]);

    const handleClick = (item) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(item?.name || "")
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const closeNoTrailerMessage = () => {
        setNoTrailerMessage("");
    };

    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">{title}</h2>
                <div className="col">
                    <div className="row__posters">
                        {list.map((item) => (
                            <img
                                key={item.id}
                                onClick={() => handleClick(item)}
                                className="row__poster row__posterLarge"
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
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
                    <button onClick={closeNoTrailerMessage}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Row;
