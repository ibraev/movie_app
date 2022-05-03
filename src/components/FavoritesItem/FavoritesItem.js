import React from 'react';
import "./FavoriteItem.css"

const FavoritesItem = ({movie, removeMovie}) => {
    return (
        <div>
            <ul>
                <li className="favorite-item">
                    {movie.title}
                    <button type="button" onClick={() => removeMovie(movie.id)} className="favorite-button">Удалить</button>
                </li>
            </ul>
        </div>
    );
};

export default FavoritesItem;