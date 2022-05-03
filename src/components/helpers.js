export const addFavorite = (movie, status) => {
    let movies = [];
    if (localStorage.getItem("favorites")) {
        movies = JSON.parse(localStorage.getItem("favorites"))
    }
    let newObject = {
        title: movie.title,
        favorite: status,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        id: movie.id
    }

    movies.push(newObject)
    localStorage.setItem("favorites", JSON.stringify(movies))
}

export const favorites = JSON.parse(localStorage.getItem("favorites"))