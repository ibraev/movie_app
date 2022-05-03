import React, {Fragment} from 'react';
import "./MovieCard.css"
import {useNavigate} from "react-router-dom";
import {addFavorite} from "../helpers";



const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const getMovieDetail = (movie_id) => {
        navigate(`/movie/${movie_id}`)
    }

    const addFavoriteMovies = (movie, status) => {
        addFavorite(movie, status)
    }

    const {poster_path, id, vote_average, title, release_date} = movie;

    const favorites = JSON.parse(localStorage.getItem("favorites"))

    return (
        <div className="movie-card">
            <img className="movie-img"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                alt=""
                width="200px"
                onClick={() => getMovieDetail(id)}
            />
            <div className="movie-average">{vote_average.toFixed(2)}</div>
            {favorites && favorites.map((favoriteMovie, key) => {
                    return (
                        <Fragment>
                            {movie.id === favoriteMovie.id ?
                                <span key={key} className="favorite"/> : null}
                        </Fragment>
                    )
            })}
            <span onClick={() => addFavoriteMovies(movie, true)} className="favorite-hover"/>
            <div className="movie-content">
                <span className="movie-title">{title}</span>
                <span><b className="movie-release">{release_date}</b></span>
            </div>
        </div>
    );
};

export default MovieCard;