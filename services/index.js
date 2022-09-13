import config from '../config';
const api = config.api;


const registerUser = async (data) => {
    try {
        const registerNewUser = await fetch(`${api}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await registerNewUser.json();
    }
    catch (error) {
        return error;
    }
};


const login = async (email, password) => {
    try {
        const data = {email, password}
        const logged = await fetch(`${api}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await logged.json();
    }
    catch (error) {
        return error;
    }
};

const checkUser = async (token) => {
    try {
        const chechUser = await fetch(`${api}/auth/check`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await chechUser.json();
    }
    catch (error) {
        return {error: true, message: error};
    }
};


const getMovies = async () => {
    try {
        const movies = await fetch(`${api}/movies?movie=image-title-rate-date-id-description-details`);
        return await movies.json();
    }
    catch (error) {
        return {error: true, message: error};
    }
};

const getMovieById = async (id) => {
    try {
        const movie = await fetch(`${api}/movies/${id}?movie=id-image-title-genreId-date-rate-description-details&character=name-image-history`);
        const movieId = await movie.json();
        return movieId.data;
    }
    catch (error) {
        return { error: true, message: error}
    }
};


export { registerUser, login, checkUser, getMovies, getMovieById };
