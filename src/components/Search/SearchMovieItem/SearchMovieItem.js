import React from 'react';
import "./SearchMovieItem.css"
import {Link} from "react-router-dom";

const SearchMovieItem = ({movie, genres}) => {
    const {id, genre_ids} = movie;

    const genresArray = genres.filter((element) => {
        return genre_ids.some((id) => {
            return element.id === id
        })
    })

    return (
        <div className="movie-item">
            <h2 className="movie-title">
                <Link className="movie-link" to={`/movie/${id}`}>{movie.title}</Link>
            </h2>
            <ul className="movie-genres">
                <b>Genres:</b>
                {genresArray.map((genres) => {
                    return (
                        <li>
                            <i>{genres.name}</i>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SearchMovieItem;