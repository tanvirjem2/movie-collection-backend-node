import express, { Request, Response } from "express"
import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();


// ---- // A parser is also required ----
app.use(express.json())

app.use('/api/movies', MovieRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send('Tanvir Anjum Shozib')
})

export default app;