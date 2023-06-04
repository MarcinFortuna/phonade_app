import {vowels, consonants, other_symbols} from "./data/symbols";

export const getShuffledArr: any = (arr: number[]) => {
    if (arr.length === 1) {return arr};
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i !== rand))];
};

export const translateSampaToIpa = (trans: string) => {
    [...vowels, ...consonants, ...other_symbols].forEach((entry: string[]) => {
        trans = trans.replaceAll(entry[1], entry[0]);
    });
    return trans;
}

export const translateIpaToSampa = (trans: string) => {
    [...vowels, ...consonants, ...other_symbols].forEach((entry: string[]) => {
        trans = trans.replaceAll(entry[0], entry[1]);
    });
    return trans;
}

export const translateConvenientSymbolsToIpa = (trans: string) => trans
    .replaceAll("'", "ˈ");

export const getRidOfDoubleSpaces = (trans: string) => {
    while (trans.includes("  ")) {
        trans = trans.replaceAll("  ", " ");
    }
    return trans;
}