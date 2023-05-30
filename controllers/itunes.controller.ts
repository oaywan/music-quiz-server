import { IITunesSearch } from "../lib";
const baseUrl = 'https://itunes.apple.com/search';

export const iTunesSearch = async ({
    term,
    mediaType,
    limit,
}: IITunesSearch) => {
    const res = await fetch(`${baseUrl}?term=${encodeURIComponent(term)}&media=${mediaType}&limit=${limit}`);
    const data = await res.json();
    if (!data.results?.length) throw new Error('No results found');
    return data.results;
};

