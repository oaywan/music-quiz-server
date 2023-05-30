import { IGame, EGameDifficulty } from "../lib";

export async function getGameOptions({ difficulty = EGameDifficulty.Normal }: IGame) {
    if (!Object.values(EGameDifficulty).includes(difficulty)) {
        throw new Error('Difficulty is invalid');
    }
}