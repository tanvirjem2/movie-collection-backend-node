import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: TMovie) => {

    // ---- Import the Movie model. ----

    const result = await Movie.create(payload);

    return result;
}

const getAllMovies = async (payload: TMovie) => {

    // ---- Import the Movie model. ----

    const result = await Movie.find(payload);

    return result;
}

const getMovieById = async (id: string) => {

    // ---- Import the Movie model ----

    // ---- I can also use findById ----

    const result = await Movie.findOne({ _id: id }).exec();

    return result;
}

export const MovieServices = {
    createMovie, getAllMovies, getMovieById
}