import {transcription_infl, transcription_most_common, transcription_sentence} from "../types/types";

export const most_common: transcription_most_common[] = [
    {id: 1, spelling: "the", sampa_strong: "\"Di:", sampa_weak: ""},
    {id: 2, spelling: "be", sampa_strong: "\"bi:", sampa_weak: ""},
    {id: 3, spelling: "of", sampa_strong: "\"Qv", sampa_weak: ""},
    {id: 4, spelling: "and", sampa_strong: "\"{nd", sampa_weak: ""},
    {id: 5, spelling: "a", sampa_strong: "\"eI", sampa_weak: ""},
    {id: 6, spelling: "to", sampa_strong: "\"tu:", sampa_weak: ""},
    {id: 7, spelling: "in", sampa_strong: "\"In", sampa_weak: ""},
    {id: 8, spelling: "he", sampa_strong: "\"hi:", sampa_weak: ""},
    {id: 9, spelling: "have", sampa_strong: "\"h{v", sampa_weak: ""},
    {id: 10, spelling: "it", sampa_strong: "\"It", sampa_weak: ""},
    {id: 11, spelling: "that", sampa_strong: "\"D{t", sampa_weak: ""},
    {id: 12, spelling: "for", sampa_strong: "\"fO:", sampa_weak: ""},
    {id: 13, spelling: "they", sampa_strong: "\"DeI", sampa_weak: ""},
    {id: 14, spelling: "I", sampa_strong: "\"aI", sampa_weak: ""},
    {id: 15, spelling: "with", sampa_strong: "\"wID", sampa_weak: ""},
    {id: 16, spelling: "as", sampa_strong: "\"{z", sampa_weak: ""},
    {id: 17, spelling: "not", sampa_strong: "\"nQt", sampa_weak: ""},
    {id: 18, spelling: "on", sampa_strong: "\"Qn", sampa_weak: ""},
    {id: 19, spelling: "she", sampa_strong: "\"Si:", sampa_weak: ""},
    {id: 20, spelling: "at", sampa_strong: "\"{t", sampa_weak: ""},
    {id: 21, spelling: "by", sampa_strong: "\"baI", sampa_weak: ""},
    {id: 22, spelling: "this", sampa_strong: "\"DIs", sampa_weak: ""},
    {id: 23, spelling: "we", sampa_strong: "\"wi:", sampa_weak: ""},
    {id: 24, spelling: "you", sampa_strong: "\"ju:", sampa_weak: ""},
    {id: 25, spelling: "do", sampa_strong: "\"du:", sampa_weak: ""},
    {id: 26, spelling: "but", sampa_strong: "\"bVt", sampa_weak: ""},
    {id: 27, spelling: "from", sampa_strong: "\"frQm", sampa_weak: ""},
    {id: 28, spelling: "or", sampa_strong: "\"O:", sampa_weak: ""},
    {id: 29, spelling: "which", sampa_strong: "\"wItS", sampa_weak: ""},
    {id: 30, spelling: "one", sampa_strong: "\"wVn", sampa_weak: ""},
    {id: 31, spelling: "would", sampa_strong: "\"wUd", sampa_weak: ""},
    {id: 32, spelling: "all", sampa_strong: "\"O:l", sampa_weak: ""},
    {id: 33, spelling: "will", sampa_strong: "\"wIl", sampa_weak: ""},
    {id: 34, spelling: "there", sampa_strong: "\"De@", sampa_weak: ""},
    {id: 35, spelling: "say", sampa_strong: "\"seI", sampa_weak: ""},
    {id: 36, spelling: "who", sampa_strong: "\"hu:", sampa_weak: ""},
    {id: 37, spelling: "make", sampa_strong: "\"meIk", sampa_weak: ""},
    {id: 38, spelling: "when", sampa_strong: "\"wen", sampa_weak: ""},
    {id: 39, spelling: "can", sampa_strong: "\"k{n", sampa_weak: ""},
    {id: 40, spelling: "more", sampa_strong: "\"mO:", sampa_weak: ""},
    {id: 41, spelling: "if", sampa_strong: "\"If", sampa_weak: ""},
    {id: 42, spelling: "no", sampa_strong: "\"n@U", sampa_weak: ""},
    {id: 43, spelling: "man", sampa_strong: "\"m{n", sampa_weak: ""},
    {id: 44, spelling: "out", sampa_strong: "\"aUt", sampa_weak: ""},
    {id: 45, spelling: "other", sampa_strong: "\"VD@", sampa_weak: ""},
    {id: 46, spelling: "so", sampa_strong: "\"s@U", sampa_weak: ""},
    {id: 47, spelling: "what", sampa_strong: "\"wQt", sampa_weak: ""},
    {id: 48, spelling: "time", sampa_strong: "\"taIm", sampa_weak: ""},
    {id: 49, spelling: "up", sampa_strong: "\"Vp", sampa_weak: ""},
    {id: 50, spelling: "go", sampa_strong: "\"g@U", sampa_weak: ""},
    {id: 51, spelling: "about", sampa_strong: "@\"baUt", sampa_weak: ""},
    {id: 52, spelling: "than", sampa_strong: "\"D{n", sampa_weak: ""},
    {id: 53, spelling: "into", sampa_strong: "\"Intu:", sampa_weak: ""},
    {id: 54, spelling: "could", sampa_strong: "\"kUd", sampa_weak: ""},
    {id: 55, spelling: "state", sampa_strong: "\"steIt", sampa_weak: ""},
    {id: 56, spelling: "only", sampa_strong: "\"@Unli", sampa_weak: ""},
    {id: 57, spelling: "new", sampa_strong: "\"nju:", sampa_weak: ""},
    {id: 58, spelling: "year", sampa_strong: "\"jI@", sampa_weak: ""},
    {id: 59, spelling: "some", sampa_strong: "\"sVm", sampa_weak: ""},
    {id: 60, spelling: "take", sampa_strong: "\"teIk", sampa_weak: ""},
    {id: 61, spelling: "come", sampa_strong: "\"kVm", sampa_weak: ""},
    {id: 62, spelling: "these", sampa_strong: "\"Di:z", sampa_weak: ""},
    {id: 63, spelling: "know", sampa_strong: "\"n@U", sampa_weak: ""},
    {id: 64, spelling: "see", sampa_strong: "\"si:", sampa_weak: ""},
    {id: 65, spelling: "use (verb)", sampa_strong: "\"ju:z", sampa_weak: ""},
    {id: 66, spelling: "get", sampa_strong: "\"get", sampa_weak: ""},
    {id: 67, spelling: "like", sampa_strong: "\"laIk", sampa_weak: ""},
    {id: 68, spelling: "then", sampa_strong: "\"Den", sampa_weak: ""},
    {id: 69, spelling: "first", sampa_strong: "\"f3:st", sampa_weak: ""},
    {id: 70, spelling: "any", sampa_strong: "\"eni", sampa_weak: ""},
    {id: 71, spelling: "work", sampa_strong: "\"w3:k", sampa_weak: ""},
    {id: 72, spelling: "now", sampa_strong: "\"naU", sampa_weak: ""},
    {id: 73, spelling: "may", sampa_strong: "\"meI", sampa_weak: ""},
    {id: 74, spelling: "such", sampa_strong: "\"sVtS", sampa_weak: ""},
    {id: 75, spelling: "give", sampa_strong: "\"gIv", sampa_weak: ""},
    {id: 76, spelling: "over", sampa_strong: "\"@Uv@", sampa_weak: ""},
    {id: 77, spelling: "think", sampa_strong: "\"TINk", sampa_weak: ""},
    {id: 78, spelling: "most", sampa_strong: "\"m@Ust", sampa_weak: ""},
    {id: 79, spelling: "even", sampa_strong: "\"i:v@n", sampa_weak: ""},
    {id: 80, spelling: "find", sampa_strong: "\"faInd", sampa_weak: ""},
    {id: 81, spelling: "day", sampa_strong: "\"deI", sampa_weak: ""},
    {id: 82, spelling: "also", sampa_strong: "\"O:ls@U", sampa_weak: ""},
    {id: 83, spelling: "after", sampa_strong: "\"A:ft@", sampa_weak: ""},
    {id: 84, spelling: "way", sampa_strong: "\"weI", sampa_weak: ""},
    {id: 85, spelling: "many", sampa_strong: "\"meni", sampa_weak: ""},
    {id: 86, spelling: "must", sampa_strong: "\"mVst", sampa_weak: ""},
    {id: 87, spelling: "look", sampa_strong: "\"lUk", sampa_weak: ""},
    {id: 88, spelling: "before", sampa_strong: "bI\"fO:", sampa_weak: ""},
    {id: 89, spelling: "great", sampa_strong: "\"greIt", sampa_weak: ""},
    {id: 90, spelling: "back", sampa_strong: "\"b{k", sampa_weak: ""},
    {id: 91, spelling: "through", sampa_strong: "\"Tru:", sampa_weak: ""},
    {id: 92, spelling: "long", sampa_strong: "\"lQN", sampa_weak: ""},
    {id: 93, spelling: "where", sampa_strong: "\"we@", sampa_weak: ""},
    {id: 94, spelling: "much", sampa_strong: "\"mVtS", sampa_weak: ""},
    {id: 95, spelling: "should", sampa_strong: "\"SUd", sampa_weak: ""},
    {id: 96, spelling: "well", sampa_strong: "\"wel", sampa_weak: ""},
    {id: 97, spelling: "people", sampa_strong: "\"pi:p@l", sampa_weak: ""},
    {id: 98, spelling: "down", sampa_strong: "\"daUn", sampa_weak: ""},
    {id: 99, spelling: "own", sampa_strong: "\"@Un", sampa_weak: ""},
    {id: 100, spelling: "just", sampa_strong: "\"dZVst", sampa_weak: ""},
    {id: 101, spelling: "because", sampa_strong: "bI\"kQz", sampa_weak: ""},
    {id: 102, spelling: "good", sampa_strong: "\"gUd", sampa_weak: ""},
    {id: 103, spelling: "each", sampa_strong: "\"i:tS", sampa_weak: ""},
    {id: 104, spelling: "those", sampa_strong: "\"D@Uz", sampa_weak: ""},
    {id: 105, spelling: "feel", sampa_strong: "\"fi:l", sampa_weak: ""},
    {id: 106, spelling: "seem", sampa_strong: "\"si:m", sampa_weak: ""},
    {id: 107, spelling: "how", sampa_strong: "\"haU", sampa_weak: ""},
    {id: 108, spelling: "high", sampa_strong: "\"haI", sampa_weak: ""},
    {id: 109, spelling: "too", sampa_strong: "\"tu:", sampa_weak: ""},
    {id: 110, spelling: "place", sampa_strong: "\"pleIs", sampa_weak: ""},
    {id: 111, spelling: "little", sampa_strong: "\"lIt@l", sampa_weak: ""},
    {id: 112, spelling: "world", sampa_strong: "\"w3:ld", sampa_weak: ""},
    {id: 113, spelling: "very", sampa_strong: "\"veri", sampa_weak: ""},
    {id: 114, spelling: "still", sampa_strong: "\"stIl", sampa_weak: ""},
    {id: 115, spelling: "nation", sampa_strong: "\"neIS@n", sampa_weak: ""},
    {id: 116, spelling: "hand", sampa_strong: "\"h{nd", sampa_weak: ""},
    {id: 117, spelling: "old", sampa_strong: "\"@Uld", sampa_weak: ""},
    {id: 118, spelling: "life", sampa_strong: "\"laIf", sampa_weak: ""},
    {id: 119, spelling: "tell", sampa_strong: "\"tel", sampa_weak: ""},
    {id: 120, spelling: "write", sampa_strong: "\"raIt", sampa_weak: ""},
    {id: 121, spelling: "become", sampa_strong: "bI\"kVm", sampa_weak: ""},
    {id: 122, spelling: "here", sampa_strong: "\"hI@", sampa_weak: ""},
    {id: 123, spelling: "show", sampa_strong: "\"S@U", sampa_weak: ""},
    {id: 124, spelling: "house", sampa_strong: "\"haUs", sampa_weak: ""},
    {id: 125, spelling: "both", sampa_strong: "\"b@UT", sampa_weak: ""},
    {id: 126, spelling: "between", sampa_strong: "bI\"twi:n", sampa_weak: ""},
    {id: 127, spelling: "need", sampa_strong: "\"ni:d", sampa_weak: ""},
    {id: 128, spelling: "mean", sampa_strong: "\"mi:n", sampa_weak: ""},
    {id: 129, spelling: "call", sampa_strong: "\"kO:l", sampa_weak: ""},
    {id: 130, spelling: "develop", sampa_strong: "dI\"vel@p", sampa_weak: ""},
    {id: 131, spelling: "under", sampa_strong: "\"Vnd@", sampa_weak: ""},
    {id: 132, spelling: "last", sampa_strong: "\"lA:st", sampa_weak: ""},
    {id: 133, spelling: "right", sampa_strong: "\"raIt", sampa_weak: ""},
    {id: 134, spelling: "move", sampa_strong: "\"mu:v", sampa_weak: ""},
    {id: 135, spelling: "thing", sampa_strong: "\"TIN", sampa_weak: ""},
    {id: 136, spelling: "general", sampa_strong: "\"dZen@r@l", sampa_weak: ""},
    {id: 137, spelling: "school", sampa_strong: "\"sku:l", sampa_weak: ""},
    {id: 138, spelling: "never", sampa_strong: "\"nev@", sampa_weak: ""},
    {id: 139, spelling: "same", sampa_strong: "\"seIm", sampa_weak: ""},
    {id: 140, spelling: "another", sampa_strong: "@\"nVD@", sampa_weak: ""},
    {id: 141, spelling: "begin", sampa_strong: "bI\"gIn", sampa_weak: ""},
    {id: 142, spelling: "while", sampa_strong: "\"waIl", sampa_weak: ""},
    {id: 143, spelling: "number", sampa_strong: "\"nVmb@", sampa_weak: ""},
    {id: 144, spelling: "part", sampa_strong: "\"pA:t", sampa_weak: ""},
    {id: 145, spelling: "turn", sampa_strong: "\"t3:n", sampa_weak: ""},
    {id: 146, spelling: "real", sampa_strong: "\"rI@l", sampa_weak: ""},
    {id: 147, spelling: "leave", sampa_strong: "\"li:v", sampa_weak: ""},
    {id: 148, spelling: "might", sampa_strong: "\"maIt", sampa_weak: ""},
    {id: 149, spelling: "want", sampa_strong: "\"wQnt", sampa_weak: ""},
    {id: 150, spelling: "point", sampa_strong: "\"pOInt", sampa_weak: ""},
    {id: 151, spelling: "form", sampa_strong: "\"fO:m", sampa_weak: ""},
    {id: 152, spelling: "off", sampa_strong: "\"Qf", sampa_weak: ""},
    {id: 153, spelling: "child", sampa_strong: "\"tSaIld", sampa_weak: ""},
    {id: 154, spelling: "few", sampa_strong: "\"fju:", sampa_weak: ""},
    {id: 155, spelling: "small", sampa_strong: "\"smO:l", sampa_weak: ""},
    {id: 156, spelling: "since", sampa_strong: "\"sIns", sampa_weak: ""},
    {id: 157, spelling: "against", sampa_strong: "@\"genst", sampa_weak: ""},
    {id: 158, spelling: "ask", sampa_strong: "\"A:sk", sampa_weak: ""},
    {id: 159, spelling: "late", sampa_strong: "\"leIt", sampa_weak: ""},
    {id: 160, spelling: "home", sampa_strong: "\"h@Um", sampa_weak: ""},
    {id: 161, spelling: "interest", sampa_strong: "\"Intr@st", sampa_weak: ""},
    {id: 162, spelling: "large", sampa_strong: "\"lA:dZ", sampa_weak: ""},
    {id: 163, spelling: "person", sampa_strong: "\"p3:s@n", sampa_weak: ""},
    {id: 164, spelling: "end", sampa_strong: "\"end", sampa_weak: ""},
    {id: 165, spelling: "open", sampa_strong: "\"@Up@n", sampa_weak: ""},
    {id: 166, spelling: "public", sampa_strong: "\"pVblIk", sampa_weak: ""},
    {id: 167, spelling: "follow", sampa_strong: "\"fQl@U", sampa_weak: ""},
    {id: 168, spelling: "during", sampa_strong: "\"djU@rIN", sampa_weak: ""},
    {id: 169, spelling: "present (verb)", sampa_strong: "prI\"zent", sampa_weak: ""},
    {id: 170, spelling: "without", sampa_strong: "wID\"aUt", sampa_weak: ""},
    {id: 171, spelling: "again", sampa_strong: "@\"gen", sampa_weak: ""},
    {id: 172, spelling: "hold", sampa_strong: "\"h@Uld", sampa_weak: ""},
    {id: 173, spelling: "govern", sampa_strong: "\"gVv@n", sampa_weak: ""},
    {id: 174, spelling: "around", sampa_strong: "@\"raUnd", sampa_weak: ""},
    {id: 175, spelling: "possible", sampa_strong: "\"pQs@b@l", sampa_weak: ""},
    {id: 176, spelling: "head", sampa_strong: "\"hed", sampa_weak: ""},
    {id: 177, spelling: "consider", sampa_strong: "k@n\"sId@", sampa_weak: ""},
    {id: 178, spelling: "word", sampa_strong: "\"w3:d", sampa_weak: ""},
    {id: 179, spelling: "program", sampa_strong: "\"pr@Ugr{m", sampa_weak: ""},
    {id: 180, spelling: "problem", sampa_strong: "\"prQbl@m", sampa_weak: ""},
    {id: 181, spelling: "however", sampa_strong: "haU\"ev@", sampa_weak: ""},
    {id: 182, spelling: "lead", sampa_strong: "\"li:d", sampa_weak: ""},
    {id: 183, spelling: "system", sampa_strong: "\"sIst@m", sampa_weak: ""},
    {id: 184, spelling: "set", sampa_strong: "\"set", sampa_weak: ""},
    {id: 185, spelling: "order", sampa_strong: "\"O:d@", sampa_weak: ""},
    {id: 186, spelling: "eye", sampa_strong: "\"aI", sampa_weak: ""},
    {id: 187, spelling: "plan", sampa_strong: "\"pl{n", sampa_weak: ""},
    {id: 188, spelling: "run", sampa_strong: "\"rVn", sampa_weak: ""},
    {id: 189, spelling: "keep", sampa_strong: "\"ki:p", sampa_weak: ""},
    {id: 190, spelling: "face", sampa_strong: "\"feIs", sampa_weak: ""},
    {id: 191, spelling: "fact", sampa_strong: "\"f{kt", sampa_weak: ""},
    {id: 192, spelling: "group", sampa_strong: "\"gru:p", sampa_weak: ""},
    {id: 193, spelling: "play", sampa_strong: "\"pleI", sampa_weak: ""},
    {id: 194, spelling: "stand", sampa_strong: "\"st{nd", sampa_weak: ""},
    {id: 195, spelling: "increase (verb)", sampa_strong: "In\"kri:s", sampa_weak: ""},
    {id: 196, spelling: "early", sampa_strong: "\"3:li", sampa_weak: ""},
    {id: 197, spelling: "course", sampa_strong: "\"kO:s", sampa_weak: ""},
    {id: 198, spelling: "change", sampa_strong: "\"tSeIndZ", sampa_weak: ""},
    {id: 199, spelling: "help", sampa_strong: "\"help", sampa_weak: ""},
    {id: 200, spelling: "line ", sampa_strong: "\"laIn", sampa_weak: ""}
];

const inflected_words_s: transcription_infl[] = [
    {id: 1, basic: "book", infl: "books", sampa_basic: "\"bUk", sampa_infl: "\"bUks"},
    {id: 2, basic: "log", infl: "logs", sampa_basic: "\"lQg", sampa_infl: "\"lQgz"},
    {id: 3, basic: "dog", infl: "dogs", sampa_basic: "\"dQg", sampa_infl: "\"dQgz"},
    {id: 4, basic: "cat", infl: "cats", sampa_basic: "\"k{t", sampa_infl: "\"k{ts"},
    {id: 5, basic: "car", infl: "cars", sampa_basic: "\"kA:", sampa_infl: "\"kA:z"},
    {id: 6, basic: "bel", infl: "bells", sampa_basic: "\"bel", sampa_infl: "\"belz"},
    {id: 7, basic: "witch", infl: "witches", sampa_basic: "\"wItS", sampa_infl: "\"wItSIz"},
    {id: 8, basic: "wash", infl: "washes", sampa_basic: "\"wQS", sampa_infl: "\"wQSIz"},
    {id: 9, basic: "edge", infl: "edges", sampa_basic: "\"edZ", sampa_infl: "\"edZIz"},
    {id: 10, basic: "watch", infl: "watches", sampa_basic: "\"wQtS", sampa_infl: "\"wQtSIz"},
    {id: 11, basic: "time", infl: "times", sampa_basic: "\"taIm", sampa_infl: "\"taImz"},
    {id: 12, basic: "year", infl: "years", sampa_basic: "\"jI@", sampa_infl: "\"jI@z"},
    {id: 13, basic: "state", infl: "states", sampa_basic: "\"steIt", sampa_infl: "\"steIts"},
    {id: 14, basic: "work", infl: "works", sampa_basic: "\"w3:k", sampa_infl: "\"w3:ks"},
    {id: 15, basic: "place", infl: "places", sampa_basic: "\"pleIs", sampa_infl: "\"pleIsIz"},
    {id: 16, basic: "world", infl: "worlds", sampa_basic: "\"w3:ld", sampa_infl: "\"w3:ldz"},
    {id: 17, basic: "buzz", infl: "buzzes", sampa_basic: "\"bVz", sampa_infl: "\"bVzIz"},
    {id: 18, basic: "mass", infl: "masses", sampa_basic: "\"m{s", sampa_infl: "\"m{sIz"},
    {id: 19, basic: "course", infl: "courses", sampa_basic: "\"kO:s", sampa_infl: "\"kO:sIz"},
    {id: 20, basic: "line", infl: "lines", sampa_basic: "\"laIn", sampa_infl: "\"laInz"},
    {id: 21, basic: "group", infl: "groups", sampa_basic: "\"gru:p", sampa_infl: "\"gru:ps"},
    {id: 22, basic: "stand", infl: "stands", sampa_basic: "\"st{nd", sampa_infl: "\"st{ndz"},
    {id: 23, basic: "rose", infl: "roses", sampa_basic: "\"r@Uz", sampa_infl: "\"r@UzIz"},
    {id: 24, basic: "kill", infl: "kills", sampa_basic: "\"kIl", sampa_infl: "\"kIlz"},
    {id: 25, basic: "row", infl: "rows", sampa_basic: "\"r@U", sampa_infl: "\"r@Uz"},
    {id: 26, basic: "knee", infl: "knees", sampa_basic: "\"ni:", sampa_infl: "\"ni:z"},
    {id: 27, basic: "cry", infl: "cries", sampa_basic: "\"kraI", sampa_infl: "\"kraIz"},
    {id: 28, basic: "tree", infl: "trees", sampa_basic: "\"tri:", sampa_infl: "\"tri:z"},
    {id: 29, basic: "trip", infl: "trips", sampa_basic: "\"trIp", sampa_infl: "\"trIps"},
    {id: 30, basic: "cough", infl: "coughs", sampa_basic: "\"kQf", sampa_infl: "\"kQfs"}
]

const inflected_words_d: transcription_infl[] = [
    {id: 1, basic: "book", infl: "booked", sampa_basic: "\"bUk", sampa_infl: "\"bUkt"},
    {id: 2, basic: "kill", infl: "killed", sampa_basic: "\"kIl", sampa_infl: "\"kIld"},
    {id: 3, basic: "work", infl: "worked", sampa_basic: "\"w3:k", sampa_infl: "\"w3:kt"},
    {id: 4, basic: "cry", infl: "cried", sampa_basic: "\"kraI", sampa_infl: "\"kraId"},
    {id: 5, basic: "state", infl: "stated", sampa_basic: "\"steIt", sampa_infl: "\"steItId"},
    {id: 6, basic: "place", infl: "placed", sampa_basic: "\"pleIs", sampa_infl: "\"pleIst"},
    {id: 7, basic: "wash", infl: "washed", sampa_basic: "\"wQS", sampa_infl: "\"wQSt"},
    {id: 8, basic: "watch", infl: "watched", sampa_basic: "\"wQtS", sampa_infl: "\"wQtSt"},
    {id: 9, basic: "demand", infl: "demanded", sampa_basic: "dI\"mA:nd", sampa_infl: "dI\"mA:ndId"},
    {id: 10, basic: "avoid", infl: "avoided", sampa_basic: "@\"vOId", sampa_infl: "@\"vOIdId"},
    {id: 11, basic: "end", infl: "ended", sampa_basic: "\"end", sampa_infl: "\"endId"},
    {id: 12, basic: "need", infl: "needed", sampa_basic: "\"ni:d", sampa_infl: "\"ni:dId"},
    {id: 13, basic: "edit", infl: "edited", sampa_basic: "\"edIt", sampa_infl: "\"edItId"},
    {id: 14, basic: "exist", infl: "existed", sampa_basic: "Ig\"zIst", sampa_infl: "Ig\"zIstId"},
    {id: 15, basic: "water", infl: "watered", sampa_basic: "\"wO:t@", sampa_infl: "\"wO:t@d"},
    {id: 16, basic: "lift", infl: "lifted", sampa_basic: "\"lIft", sampa_infl: "\"lIftId"},
    {id: 17, basic: "text", infl: "texted", sampa_basic: "\"tekst", sampa_infl: "\"tekstId"},
    {id: 18, basic: "appear", infl: "appeared", sampa_basic: "@\"pI@", sampa_infl: "@\"pI@d"},
    {id: 19, basic: "differ", infl: "differed", sampa_basic: "\"dIf@", sampa_infl: "\"dIf@d"},
    {id: 20, basic: "bake", infl: "baked", sampa_basic: "\"beIk", sampa_infl: "\"beIkt"},
    {id: 21, basic: "echo", infl: "echoed", sampa_basic: "\"ek@U", sampa_infl: "\"ek@Ud"},
    {id: 22, basic: "tattoo", infl: "tattooed", sampa_basic: "t@\"tu:", sampa_infl: "t@\"tu:d"},
    {id: 23, basic: "carry", infl: "carried", sampa_basic: "\"k{ri", sampa_infl: "\"k{rid"},
    {id: 24, basic: "destroy", infl: "destroyed", sampa_basic: "dIs\"trOI", sampa_infl: "dIs\"trOId"},
    {id: 25, basic: "form", infl: "formed", sampa_basic: "\"fO:m", sampa_infl: "\"fO:md"},
    {id: 26, basic: "fail", infl: "failed", sampa_basic: "\"feIl", sampa_infl: "\"feIld"},
    {id: 27, basic: "earn", infl: "earned", sampa_basic: "\"3:n", sampa_infl: "\"3:nd"},
    {id: 28, basic: "dance", infl: "danced", sampa_basic: "\"dA:ns", sampa_infl: "\"dA:nst"},
    {id: 29, basic: "face", infl: "faced", sampa_basic: "\"feIs", sampa_infl: "\"feIst"},
    {id: 30, basic: "recognize", infl: "recognized", sampa_basic: "\"rek@gnaIz", sampa_infl: "\"rek@gnaIzd"}
];

export const all_inflected: transcription_infl[] = [...inflected_words_d, ...inflected_words_s];

export const sentences: transcription_sentence[] = [
    {id: 1, spelling: "The problem is that the change might be small.", sampa: "D@ \"prQbl@m Iz D@t D@ \"tSeIndZ maIt bi \"smO:l"},
    {id: 2, spelling: "I would like to be a hero.", sampa: "aI w@d \"laIk t@ bi @ \"hI@r@U"},
    {id: 3, spelling: "I will never give you up.", sampa: "aI wIl \"nev@ gIv ju \"Vp"},
    {id: 4, spelling: "He stood by what he said.", sampa: "hi \"stUd \"baI wQt hi \"sed"},
    {id: 5, spelling: "There are around one hundred possible combinations.", sampa: "D@r @r @\"raUnd wVn \"hVndr@d \"pQs@b@l %kQmbI\"neIʃ@nz"},
    {id: 6, spelling: "There are some people willing to help you.", sampa: "D@r @ s@m \"pi:p@l \"wIlIN t@ \"help ju:"},
    {id: 7, spelling: "She has a new bag.", sampa: "ʃi h@z @ \"nju: \"b{g"},
    {id: 8, spelling: "He likes swimming on sunny days.", sampa: "hi laIks \"swImIN Qn \"sVni \"deIz"},
    {id: 9, spelling: "First come, first served.", sampa: "f3:st \"kVm | f3:st \"s3:vd"},
    {id: 10, spelling: "If they lived in Spain, they would be happy.", sampa: "If DeI \"lIvd In \"speIn | DeI w@d bi \"h{pi"},
    {id: 11, spelling: "Another person is sick.", sampa: "@\"nVD@ \"p3:s@n Iz \"sIk"},
    {id: 12, spelling: "This school is very old.", sampa: "DIs \"sku:l Iz \"veri \"@Uld"},
    {id: 13, spelling: "I bought some apples from the local market.", sampa: "aI \"bO:t s@m \"{plz fr@m D@ \"l@Uk@l \"mA:kIt"},
    {id: 14, spelling: "I'm going to the cinema with Mary and her sister.", sampa: "aIm \"g@UIN t@ D@ \"sIn@m@ wID \"me@ri @nd h@ \"sIst@"},
    {id: 15, spelling: "All people can do good.", sampa: "\"O:l \"pi:p@l k@n \"du: \"gUd"},
    {id: 16, spelling: "We have to go because we have a long journey ahead of us.", sampa: "wi h@v t@ \"g@U bI\"kQz wi h@v @ \"lQN \"dZ3:ni @\"hed @v Vs"},
    {id: 17, spelling: "This is by far the best experience i have ever had.", sampa: "DIs Iz baI \"fA: D@ \"best Iks\"pI@rI@ns aI h@v \"ev@ \"h{d"},
    {id: 18, spelling: "He looked like he was lost.", sampa: "hi \"lUkt laIk hi w@z \"lQst"},
    {id: 19, spelling: "Only a year ago did I realize I was wrong.", sampa: "\"@Unli @ \"jI@r @\"g@U dId aI \"rI@laIz aI w@z \"rQN"},
    {id: 20, spelling: "I could not find a new pair of socks.", sampa: "aI k@d \"nQt \"faInd @ \"nju: \"pe@r @v \"sQks"},
    {id: 21, spelling: "Little did I know about the world.", sampa: "\"lItl dId aI \"n@U @\"baUt D@ \"w3:ld"},
    {id: 22, spelling: "It was such a good day that we will all think of forever.", sampa: "It w@z \"sVtS @ \"gUd \"deI D@t wi wIl \"O:l \"TINk @v f@\"rev@"},
    {id: 23, spelling: "In one of his eyes he had a fly", sampa: "In \"wVn @v Iz aIz hi h@d @ \"flaI"},
    {id: 24, spelling: "It was not a good show.", sampa: "It w@z \"nQt @ \"gUd \"ʃ@U"},
    {id: 25, spelling: "He doesn’t even like working in an office.", sampa: "hi \"dVz@nt \"i:v@n laIk \"w3:kIN In @n \"QfIs"},
    {id: 26, spelling: "I’m sitting across from the most beautiful girl right now.", sampa: "aIm \"sItIN @\"krQs fr@m D@ m@Ust \"bju:t@fUl \"g3:l raIt \"naU"},
    {id: 27, spelling: "They may think I am at home.", sampa: "DeI meI \"TINk aI @m @t \"h@Um"},
    {id: 28, spelling: "I do not get any of it.", sampa: "aI d@ nQt get \"eni @v It"},
    {id: 29, spelling: "There is no way that he is able to do it.", sampa: "D@ z n@U weI D@t hi Iz \"eIb@l t@ \"du: It"},
    {id: 30, spelling: "What can I say, that was easy.", sampa: "\"wQt k@n aI \"seI | D{t w@z \"i:zi"},
    {id: 31, spelling: "I’m the one who did this.", sampa: "aIm D@ \"wVn hu: \"dId DIs"},
    {id: 32, spelling: "I’d love to make a cake this weekend.", sampa: "aId \"lVv t@ \"meIk @ \"keIk DIs wi:k\"end"},
    {id: 33, spelling: "My favourite part of the play was the finale.", sampa: "maI \"feIv@rIt \"pA:t @v D@ \"pleI w@z D@ fI\"nA:li"},
    {id: 34, spelling: "You should keep an eye on that child.", sampa: "j@ ʃ@d \"ki:p @n \"aI Qn D@t \"tSaIld"},
    {id: 35, spelling: "I like eating vegetables just as much as meat.", sampa: "aI laIk \"i:tIN \"vedZt@b@lz dZ@st @z \"mVtS @z \"mi:t"},
    {id: 36, spelling: "He does not like his current job.", sampa: "hi d@z \"nQt \"laIk Iz \"kVr@nt \"dZQb"},
    {id: 37, spelling: "I was at the cinema when it happened", sampa: "aI w@z @t D@ \"sIn@m@ wen It \"h{p@nd"},
    {id: 38, spelling: "We sold our house because it was too big", sampa: "wi \"s@Uld \"aU@ haUs bI\"kQz It w@z tu: \"bIg"},
    {id: 39, spelling: "please turn the light off", sampa: "\"pli:z \"t3:n D@ \"laIt Qf"},
    {id: 40, spelling: "Can you open the door?", sampa: "k@n ju \"@Up@n D@ \"dO:"},
    {id: 41, spelling: "you should exercise more often", sampa: "j@ ʃ@d \"eks@saIz mO:r \"Qf@n"},
    {id: 42, spelling: "We needed to go back through the tunnel.", sampa: "wi \"ni:dId t@ \"g@U \"b{k Tru: D@ \"tVnl"},
    {id: 43, spelling: "The program was great before they changed it.", sampa: "D@ \"pr@Ugr{m w@z \"greIt bI\"fO: DeI \"tSeIndZd It"},
    {id: 44, spelling: "I find this book quite interesting.", sampa: "aI \"faInd DIs \"bUk kwaIt \"IntrestIN"},
    {id: 45, spelling: "If you open the door, she will kill you.", sampa: "If ju \"@Up@n D@ \"dO: | ʃi wIl \"kIl ju:"},
    {id: 46, spelling: "Don’t speak to me like that.", sampa: "\"d@Unt \"spi:k t@ mi laIk \"D{t"},
    {id: 47, spelling: "You are going to have a little brother or sister.", sampa: "ju @ \"g@UIN t@ h@v @ \"lIt@l \"brVD@r @ \"sIst@"},
    {id: 48, spelling: "Under no circumstances can I be late.", sampa: "\"Vnd@ n@U \"s3:k@mst@nsIz k@n aI bi \"leIt"},
    {id: 49, spelling: "I cannot sing, but I like it.", sampa: "aI \"k{nQt sIN | b@t aI \"laIk It"},
    {id: 50, spelling: "I didn’t like the trip to Italy.", sampa: "aI \"dId@nt laIk D@ \"trIp tu \"It@li"},
    {id: 51, spelling: "She needed to call the manager because it got out of control.", sampa: "ʃi \"ni:dId t@ \"kO:l D@ \"m{nIdZ@ bI\"kQz It gQt \"aUt @v k@n\"tr@Ul"},
    {id: 52, spelling: "Last Christmas is the most played song during the holiday season.", sampa: "\"lA:st \"krIsm@s Iz D@ \"m@Ust \"pleId \"sQN djU@rIN D@ \"hQl@deI \"si:zn"},
    {id: 53, spelling: "What are you up to?", sampa: "\"wQt @ ju \"Vp tu:"},
    {id: 54, spelling: "It’s time to go.", sampa: "Its \"taIm t@ \"g@U"},
    {id: 55, spelling: "Many people feel better when it's sunny outside", sampa: "\"meni \"pi:p@l \"fi:l \"bet@ wen Its \"sVni %aUt\"saId"},
    {id: 56, spelling: "Alice wants to have better grades, but she gets distracted all the time when studying", sampa: "\"{lIs wQnts t@ h@v \"bet@ \"greIdz | b@t ʃi \"gets dIs\"tr{ktId \"O:l D@ \"taIm wen \"stVdiIN"},
    {id: 57, spelling: "She was with a man that day.", sampa: "ʃi w@z wID @ \"m{n D@t \"deI"},
    {id: 58, spelling: "A rabbit jumped out of the hat into my hand.", sampa: "@ \"r{bIt \"dZVmpt aUt @v D@ \"h{t \"Int@ maI \"h{nd"},
    {id: 59, spelling: "Other people were shocked that I love him so much.", sampa: "\"VD@ \"pi:p@l w@ \"ʃQkt D@t aI \"lVv Im s@U \"mVtS"},
    {id: 60, spelling: "I care about them more than you do.", sampa: "aI \"ke@r @\"baUt D@m mO: D@n \"ju: \"du:"},
    {id: 61, spelling: "Take a deep breath and look at the state of things.", sampa: "\"teIk @ \"di:p \"breT @nd \"lUk @t D@ \"steIt @v \"TINz"},
    {id: 62, spelling: "You must give me back those books.", sampa: "j@ m@st \"gIv mi \"b{k D@Uz \"bUks"},
    {id: 63, spelling: "Where can I find that house you said you own?", sampa: "\"we@ k@n aI \"faInd D@t \"haUs j@ \"sed ju \"@Un"},
    {id: 64, spelling: "Claudia runs every day for two hours, even during the most severe weather.", sampa: "\"klO:dI@ rVnz \"evri deI f@ \"tu: \"aU@z | \"i:v@n \"djU@rIN D@ m@Ust sI\"vI@ \"weD@"},
    {id: 65, spelling: "My parents just bought a large home next to the sea.", sampa: "maI \"pe@r@nts dZ@st \"bO:t @ \"lA:dZ \"h@Um \"nekst t@ D@ \"si:"},
    {id: 66, spelling: "After many attempts she found out that there was no solution.", sampa: "A:ft@ \"meni @\"tempts ʃi \"faUnd \"aUt D@t D@ w@z \"n@U s@\"lu:ʃ@n"},
    {id: 67, spelling: "He said he felt that too.", sampa: "hi \"sed hi \"felt D{t \"tu:"},
    {id: 68, spelling: "The prices in the shops seem to be getting higher and higher each year.", sampa: "D@ \"praIsIz In D@ \"ʃQps si:m t@ bi \"getIN \"haI@r @nd \"haI@r \"i:tS \"jI@"},
    {id: 69, spelling: "It’s not a real party without my lovely friends.", sampa: "Its \"nQt @ rI@l \"pA:ti wI\"DaUt maI \"lVvli \"frendz"},
    {id: 70, spelling: "Both sides of the conflict are important.", sampa: "b@UT \"saIdz @v D@ \"kQnflIkt @r Im\"pO:t@nt"},
    {id: 71, spelling: "And that's the end of the story.", sampa: "@nd \"D{ts Di \"end @v D@ \"stO:ri"},
    {id: 72, spelling: "Which one is better?", sampa: "\"wItS wVn Iz \"bet@"},
    {id: 73, spelling: "There's no more cake.", sampa: "D@z n@U mO: \"keIk"},
    {id: 74, spelling: "The coffee was made for my boss.", sampa: "D@ \"kQfi w@z \"meId f@ maI \"bQs"},
    {id: 75, spelling: "You need to relax and become an artist.", sampa: "j@ \"ni:d t@ rI\"l{ks @nd bI\"kVm @n \"A:tIst"},
    {id: 76, spelling: "You have to go down this road and my place will be right there.", sampa: "j@ h@v t@ \"g@U \"daUn DIs \"r@Ud @nd \"maI \"pleIs wIl bi raIt \"De@"},
    {id: 77, spelling: "I don't need much, I just need you.", sampa: "aI d@Unt \"ni:d \"mVtS | aI dZ@st \"ni:d \"ju:"},
    {id: 78, spelling: "Of course I will be there.", sampa: "@v \"kO:s aI wIl bi \"De@"},
    {id: 79, spelling: "The whole thing was a set-up.", sampa: "D@ h@Ul \"TIN w@z @ \"setVp"},
    {id: 80, spelling: "The system let us down.", sampa: "D@ \"sIst@m let @s \"daUn"},
    {id: 81, spelling: "You crossed the line.", sampa: "j@ \"krQst D@ \"laIn"},
    {id: 82, spelling: "School begins at 8 o'clock.", sampa: "sku:l bI\"gInz {t \"eIt @\"klQk"},
    {id: 83, spelling: "I've loved being around in the kitchen baking since I was a little child.", sampa: "aIv \"lVvd \"bi:IN @\"raUnd In D@ \"kItSIn \"beIkIN sIns aI w@z @ \"lIt@l \"tSaIld"},
    {id: 84, spelling: "Ellen is head over heels in love with Jake, just look how she's smiling at him.", sampa: "\"el@n Iz \"hed @Uv@ \"hi:lz In \"lVv wID \"dZeIk | dZ@st \"lUk haU ʃi:z \"smaIlIN @t hIm"},
    {id: 85, spelling: "I want to keep some of my old notebooks for my sister to use in the future.", sampa: "aI \"wQnt t@ \"ki:p s@m @v maI \"@Uld \"n@UtbUks f@ maI \"sIst@ t@ \"ju:z In D@ \"fju:tS@"},
    {id: 86, spelling: "I have to get up early tomorrow.", sampa: "aI h@v t@ \"get \"Vp \"3:li t@\"mQr@U"},
    {id: 87, spelling: "You must follow our rules.", sampa: "j@ m@st \"fQl@U aU@ \"ru:lz"},
    {id: 88, spelling: "I'm still very angry with you.", sampa: "aIm stIl \"veri \"{Ngri wID \"ju:"},
    {id: 89, spelling: "How do you follow the general rules?", sampa: "haU d@ j@ \"fQl@U D@ \"dZen@r@l \"ru:lz"},
    {id: 90, spelling: "What number of points will qualify us?", sampa: "\"wQt \"nVmb@r @v \"pOInts wIl \"kwQlIfaI Vs"},
    {id: 91, spelling: "Let's consider all the possibilities again.", sampa: "lets k@n\"sId@r \"O:l D@ %pQs@\"bIl@tiz @\"gen"},
]