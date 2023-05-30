import { IGame, IITunesTrack } from "./lib";

export const gamifyResults = (tracks: IITunesTrack[], options: IGame) => {

}

export function constructUrl(baseUrl: string, searchParams: { [key: string]: string }) {
    if (typeof baseUrl !== 'string' && !isValidHttpUrl(baseUrl)) {
        throw new Error('Expected a url as first parameter in constructUrl');
    }
    if (typeof searchParams !== 'object' && !Array.isArray(searchParams)) {
        throw new Error('Expected an object as second parameter in constructUrl')
    }
    const url = new URLSearchParams(baseUrl);
    for (let key in searchParams) {
        url.append(key, searchParams[key]);
    }
    return url.toString();
}

export function isValidHttpUrl(str) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    return pattern.test(str);
}