import React, {Suspense} from 'react';
import MovieList from "../../components/MovieList/MovieList";
import SearchMovie from "../../components/Search/SearchMovie";
import Spinner from "../../components/Spinner/Spinner";


const Home = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <div className="container">
                <SearchMovie/>
                <MovieList/>
            </div>
        </Suspense>
    );
};

export default Home;