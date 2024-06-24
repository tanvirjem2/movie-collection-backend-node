import { Request, Response } from "express"
import { MovieServices } from "./movie.service"

const createMovie = async (req: Request, res: Response) => {

    const movieData = req.body;

    const result = await MovieServices.createMovie(movieData)

    res.json({
        success: true,
        message: 'Movie created successfully!',
        data: result
    })

}

const getAllMovies = async (req: Request, res: Response) => {

    try {
        const movieData = req.body;

        const result = await MovieServices.getAllMovies(movieData)

        res.status(200).json({
            success: true,
            message: 'Movies fetched successfully!',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not fetched movies!',
            error: err
        })
    }

}

const getMovieById = async (req: Request, res: Response) => {

    try {
        const { movieId } = req.params;

        const result = await MovieServices.getMovieById(movieId);

        res.status(200).json({
            success: true,
            message: 'Movies fetched successfully!',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not fetched movies!',
            error: err
        })
    }

}

export const MovieControllers = {
    createMovie, getAllMovies, getMovieById
} 