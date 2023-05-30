import express from "express";
import { iTunesRoute } from "./routes/itunes.route";
import { gameRoute } from "./routes/game.route";

export const routes = express.Router()
    .use('/api/game', gameRoute)
    .use('/api/search', iTunesRoute);
