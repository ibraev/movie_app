import React, {useEffect, useState, Fragment} from 'react';
import {useParams} from "react-router";
import api from "../../api";
import {addFavorite} from "../helpers";


const DetailCard = () => {
    const {movie_id} = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        api.get(`/movie/${movie_id}?api_key=712c7b4ef8acb4be82fa8a92e87e1c75`)
            .then((res) => {
                setDetail(res.data)
            }).catch((error) => {
            setDetail(error)
        })
    }, [movie_id])

    const addFavoriteMovies = (detail, status) => {
        addFavorite(detail, status)
    }
    const {title, poster_path, release_date, vote_average, overview, vote_count} = detail;
    const favorites = JSON.parse(localStorage.getItem("favorites"))

    return (
        <div>
            <div className="movie-detail">
                <h1 className="detail-title">{title}</h1>
                <div className="detail-content">
                    <div className="detail-media">
                        <img className="detail-image"  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                        {favorites.map((movie) => {
                            return (
                                <Fragment>
                                    {movie.id === detail.id ?
                                        <span onClick={() => addFavoriteMovies(detail, true)} className="detail-favorite"/> : null}
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="detail-inform">
                        <div>
                            <div className="release-year">{release_date}</div>
                            <div className="rating">
                                <span>{vote_average}/</span>
                                <span>{vote_count}</span>
                            </div>
                        </div>
                        <div>
                            <p className="detail-overview">
                                {overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;