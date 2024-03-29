import React, {useState} from 'react';
import {most_common, sentences} from "../data/transcriptions";
import {transcription_most_common, transcription_sentence} from "../types/types";
import {useAppContext} from "../libs/ContextLib";
import {translateConvenientSymbolsToIpa, translateSampaToIpa} from "../helperFunctions";

export const SeeList = () => {

    const ctx = useAppContext();

    const listActive: boolean =  ctx?.guessActive || !ctx?.gameOn;

    const [tabOne, setTab] = useState<boolean>(true);

    return (
        <>
            <label htmlFor={listActive ? "vocab-list-modal" : ""} className={listActive ? "cursor-pointer" : ""} title="See the full list">
                <svg xmlns="http://www.w3.org/2000/svg" fill={listActive ? "currentColor" : "grey"} strokeWidth={1.5}
                     className="bi bi-list-ol w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 13 13">
                    <path fillRule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                    <path
                        d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                </svg>
            </label>
            <input type="checkbox" id="vocab-list-modal" className="modal-toggle" />

            <label htmlFor="vocab-list-modal" className="modal cursor-pointer">
                <label className="modal-box w-11/12 max-w-7xl" htmlFor="">
                    <div className="tabs mb-6">
                        <a className={tabOne ? "w-1/2 tab tab-lg tab-bordered tab-active" : "w-1/2 tab tab-lg tab-bordered"} onClick={() => setTab(true)}>Words</a>
                        <a className={tabOne ? "w-1/2 tab tab-lg tab-bordered" : "w-1/2 tab tab-lg tab-bordered tab-active"} onClick={() => setTab(false)}>Sentences</a>
                    </div>
                    <h3 className="font-bold text-lg">{tabOne ? "The 200 most common English words and their RP pronunciation (strong forms only)" : "91 exemplary sentences and their RP pronunciation"}</h3>
                    <div className={tabOne ? '' : "hidden"}>
                        <h4 className="font-bold text-sm mt-2">Prepared on the basis of <a
                            href="http://www.teacherjoe.us/Vocab200.html" className="link link-secondary">Teacher Joe's list</a></h4>
                        <div className="">
                          <table className="table table-compact w-full mt-6">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Word</th>
                                <th>{ctx?.useIpa ? "IPA" : "X-SAMPA"}</th>
                              </tr>
                            </thead>
                            <tbody>
                            {most_common.map((word: transcription_most_common) => {
                                return <tr key={word.id}>
                                    <td>{word.id}</td>
                                    <td>{word.spelling}</td>
                                    <td>{ctx?.useIpa ? translateConvenientSymbolsToIpa(translateSampaToIpa(word.sampa_strong)) : word.sampa_strong}</td>
                                </tr>
                            })}
                            </tbody>
                          </table>
                        </div>
                    </div>
                    <div className={tabOne ? 'hidden' : ''}>
                        <h4 className="font-bold text-sm mt-2">
                            Beware! These are not the only options for the distribution of word stress and weak forms.
                        </h4>
                        <div className="">
                          <table className="table table-compact w-full mt-6">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Sentence</th>
                                <th>{ctx?.useIpa ? "IPA" : "X-SAMPA"}</th>
                              </tr>
                            </thead>
                            <tbody>
                            {sentences.map((sentence: transcription_sentence) => {
                                return <tr key={sentence.id}>
                                    <td>{sentence.id}</td>
                                    <td>{sentence.spelling}</td>
                                    <td>{ctx?.useIpa ? translateConvenientSymbolsToIpa(translateSampaToIpa(sentence.sampa)) : sentence.sampa}</td>
                                </tr>
                            })}
                            </tbody>
                          </table>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="vocab-list-modal" className="btn">Close</label>
                    </div>
                </label>
            </label>
        </>
    )
}