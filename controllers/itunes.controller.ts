import { IITunesSearch } from "../lib";
import { constructUrl } from "../utils";
const baseUrl = 'https://itunes.apple.com/search';

export const searchSongs = async ({
    term,
    limit,
}: IITunesSearch) => {
    const url = constructUrl(baseUrl, {
        term,
        limit: limit.toString(),
        media: 'music',
        entity: 'song',
    });
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results?.length) throw new Error('No results found');
    return data.results;
};

