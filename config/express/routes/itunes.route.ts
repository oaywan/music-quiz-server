import express from 'express';
import { EITunesMedia } from '../../../lib';
import { searchSongs } from '../../../controllers/itunes.controller';
const defaultLimit = 10;

const iTunesRoute = express.Router(({ mergeParams: true }));
iTunesRoute.get('/:term', async (req, res, next) => {
    const { params: { term } } = req;

    try {
        if (!term) throw new Error('Unable to search without a search term');
        const results = await searchSongs({
            term,
            limit: defaultLimit,
        });
        results.map()
        res.send(results);
    } catch (err) {
        next(err);
    }
});

export { iTunesRoute };