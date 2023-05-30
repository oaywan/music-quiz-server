import express from 'express';

const gameRoute = express.Router({ mergeParams: true });
gameRoute.get('/', (req, res, next) => {
    res.send('game route');
})

export { gameRoute };