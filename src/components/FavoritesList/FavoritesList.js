import React, {useEffect} from 'react';
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import {favorites} from "../helpers";

const FavoritesList = () => {
    useEffect(() => {
        window.addEventListener("click", favorites)
    }, [])

    const array = JSON.parse(localStorage.getItem("favorites"))

    function removeMovie(id)  {
        window.location.reload()
        const filtered = array.filter((movie) =>  movie.id !== id)
        return  localStorage.setItem("favorites", JSON.stringify(filtered));
    }

    return (
        <div className="container">
            <h1 className="title">Favorites</h1>
            {array && array.map((movie, key) => <FavoritesItem removeMovie={removeMovie} movie={movie} key={key}></FavoritesItem>)}
        </div>
    );
};

export default FavoritesList;