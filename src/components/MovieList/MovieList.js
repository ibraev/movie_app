import React, {useEffect, useState, Suspense, lazy} from 'react';
import api, {api_key} from "../../api";
// import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"
import Spinner from "../Spinner/Spinner";
const MovieCard = lazy(() => import("../MovieCard/MovieCard"))

const MovieList = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])



    useEffect(() => {
        if (fetching) {
            api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)
                .then((res) => {
                    setPopular([...popular, ...res.data.results])
                    setPage(prevState => prevState + 1)
                }).finally(() => setFetching(false))
        }

    }, [fetching, page, popular])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <Suspense fallback={<Spinner/>}>
            <h1 className="title">Popular movies</h1>
            <div className="movie-list">
                {popular && popular.map((movie, key) => {
                    return (
                        <Suspense fallback={<Spinner/>}>
                            <MovieCard movie={movie} key={key}/>
                        </Suspense>
                    )
                })}
            </div>
        </Suspense>

    );
};

export default MovieList;