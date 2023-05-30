import express from "express";

export const gameRoute = express.Router({ mergeParams: true })
    .get('/', (req, res, next) => {
        res.send('game route');
    })