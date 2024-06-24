
import express from 'express'
import { MovieControllers } from './movie.controller';

const router = express.Router()

// --- POST ROUTE ---

router.post('/', MovieControllers.createMovie)

// --- GET ROUTE ---

router.get('/', MovieControllers.getAllMovies)

// --- GET ROUTE FOR ONE---

router.get('/:movieId', MovieControllers.getMovieById)

export const MovieRoutes = router;


// ----> Go to app.ts file