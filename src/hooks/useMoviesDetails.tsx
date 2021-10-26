import { useEffect } from "react"
import { useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull, Movie } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}
export const useMoviesDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading:true ,
        movieFull: undefined,
        cast:[]
    })
    useEffect(() => {
        getMovieDetails()
    }, []);
    const getMovieDetails = async () => {
        const movieDetailsPromise =  movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise =  movieDB.get<CreditsResponse>(`/${movieId}/credits`)

      const [movieDetailsResponse,castResponse] = await  Promise.all([movieDetailsPromise,castPromise]);
      
      setState({
          isLoading:false ,
          movieFull: movieDetailsResponse.data ,
          cast: castResponse.data.cast 
      })
      
    }
        return {
         ...state
        }
}
