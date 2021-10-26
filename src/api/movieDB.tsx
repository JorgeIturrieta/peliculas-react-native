import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '29e113ea6badbe5d2b58ee4dd0583ba7' ,
        language: 'es-ES'
    }
});

export default movieDB ;
