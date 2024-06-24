"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_route_1 = require("./modules/movies/movie.route");
const app = (0, express_1.default)();
// ---- // A parser is also required ----
app.use(express_1.default.json());
app.use('/api/movies', movie_route_1.MovieRoutes);
app.get('/', (req, res) => {
    res.send('Tanvir Anjum Shozib');
});
exports.default = app;
