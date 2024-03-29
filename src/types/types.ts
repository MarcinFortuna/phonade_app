import {Order, Scope, Sets} from "../enums/enums";

export type transcription_most_common = {
    id: number,
    spelling: string,
    sampa_strong: string,
    sampa_weak: string
};

export type transcription_infl = {
    id: number,
    basic: string,
    infl: string,
    sampa_basic: string,
    sampa_infl: string
};

export type transcription_sentence = {
    id: number,
    spelling: string,
    sampa: string
    sampa_regex?: RegExp
}

export type current_mode = {
    set: Sets,
    order: Order,
    scope: Scope
}
