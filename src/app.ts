import express, { Request, Response } from "express"
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Tanvir Anjum Shozib')
})

export default app;