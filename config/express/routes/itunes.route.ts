import { Router } from 'express';
import { EITunesMediaType } from '../../../lib';
import { iTunesSearch } from '../../../controllers/itunes.controller';
const defaultLimit = 10;

export const iTunesRoute = Router(({ mergeParams: true }))
    .get('/:term', async ({ params: { term } }, res, next) => {
        try {
            if (!term) throw new Error('Unable to search without a search term');
            const results = await iTunesSearch({
                term,
                limit: defaultLimit,
                mediaType: EITunesMediaType.Music
            });
            results.map()
            res.send(results);
        } catch (err) {
            next(err);
        }
    });