import React, {useEffect, useState,Suspense} from 'react';
import "./SearchMoviesList/SearchMoviesList.css"
import api, {api_key} from "../../api";
import SearchMovieItem from "./SearchMovieItem/SearchMovieItem";
import Spinner from "../Spinner/Spinner";

const SearchMovie = () => {
    const [searchMovies, setSearchMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [query, setSearchMovie] = useState('')

    useEffect(() => {
        if (query !== '') {
            api.get(`/search/movie?api_key=${api_key}&query=${query}&page=1`)
                .then((response) => {
                    setSearchMovies(response.data.results)
                }).catch((error) => {
                setSearchMovies(error)
            })

            api.get(`/genre/movie/list?api_key=${api_key}&language=en-US`)
                .then((response) => {
                    setGenres(response.data.genres)
                }).catch((response) => {
                setGenres(response.data.results)
            })
        }
    }, [query])


    const onChangeSearchInput = (event) => {
        setSearchMovie(event.target.value)
    }

    const search = searchMovies && searchMovies.map((movie, key) => {
        return (
            <SearchMovieItem movie={movie} key={key} genres={genres}/>
        )
    })

    return (
        <Suspense fallback={<Spinner/>}>
            <div className="search">
                <input
                    value={query}
                    className="search-input"
                    type="search"
                    placeholder="Searching movies"
                    onChange={onChangeSearchInput}
                />
                {/*<Link className="favorite-link" to="/favorites">Favorites</Link>*/}
                <div className="search-movies-list">
                    {query === '' ? null : search}
                </div>
            </div>
        </Suspense>

    );
};

export default SearchMovie;