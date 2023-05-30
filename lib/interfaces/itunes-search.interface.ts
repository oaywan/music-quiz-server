import { EITunesMediaType } from "../enums/itunes-media-type.enum";

export interface IITunesSearch {
    term: string;
    mediaType: EITunesMediaType;
    limit: number;
};