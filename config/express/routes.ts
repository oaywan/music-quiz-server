import express from "express";
import { iTunesRoute } from "./routes/itunes.route";
import { gameRoute } from "./routes/game.route";

const routes = express.Router();
routes.use('/api/game', gameRoute);
routes.use('/api/search', iTunesRoute);

export { routes };
